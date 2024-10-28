const nodemailer = require('nodemailer')
const path = require('path')
const ejs = require('ejs')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const { handleServiceError } = require('./handlerServiceError')
const app = require('../contact')

const transporter = nodemailer.createTransport({
	host: 'smtp.office365.com',
	port: 587,
	secure: false, // use TLS
	auth: {
		user: 'brock@brockai.com',
		pass: 'S1mple403'
	},
	tls: {
		ciphers: 'SSLv3'
	}
});

const emailService = async (req) => {
	console.log(req.body)
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
console.log(mailOptions)
		return new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.log(error)
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

const keyService = (req) => {
	return {
		statusCode: 200,
		body: process.env.API_KEY
	}
};

module.exports = { emailService, keyService }
