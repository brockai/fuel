const nodemailer = require('nodemailer')
const { Client } = require('@opensearch-project/opensearch')
var jwt = require('jsonwebtoken')
const path = require('path')
const ejs = require('ejs')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const { ocrSpace } = require('ocr-space-api-wrapper')
const { handleServiceError } = require('./handlerServiceError')
const app = require('../email')

const transporter = nodemailer.createTransport({
	host: 'smtp.office365.com',
	port: 587,
	secure: false, // use TLS
	auth: {
		user: process.env.OFFICE365_USER,
		pass: process.env.OFFICE365_PASS
	},
	tls: {
		ciphers: 'SSLv3'
	}
});

const emailService = async (req) => {

	ejs.renderFile(path.join(__dirname, '../views', 'contact.ejs'), {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		message: req.body.message
	}, (err, html) => {
		if (err) {
			console.error('Error rendering EJS:', err);
			return res.status(500).send('Error rendering template');
		}

		const mailOptions = {
			from: req.body.email,
			to: process.env.OFFICE365_USER,
			subject: req.body.subject,
			html: html
		};

		return new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return reject(handleServiceError(error));
				}
				resolve({
					statusCode: 200,
					body: info.messageId
				});
			});
		});
	});
};

module.exports = { emailService }
