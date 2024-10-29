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
	try {
		const html = await new Promise((resolve, reject) => {
			ejs.renderFile(
				path.join(__dirname, '../views', 'contact.ejs'),
				{
					name: req.body.name,
					email: req.body.email,
					phone: req.body.phone,
					message: req.body.message,
				},
				(err, result) => {
					if (err) {
						console.error('Error rendering EJS:', err);
						reject(new Error('Error rendering template'));
					} else {
						resolve(result);
					}
				}
			);
		});

		const mailOptions = {
			from: process.env.OFFICE365_USER,
			to: process.env.OFFICE365_USER,
			subject: req.body.subject,
			html: html,
		};
		
		return await new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					console.error('Error sending email:', error);
					reject(new Error('Error sending email'));
				} else {
					resolve({
						statusCode: 200,
						body: info.messageId,
					});
				}
			});
		});
	} catch (error) {
		return error;
	}
};

const keyService = (req) => {
	return {
		statusCode: 200,
		body: process.env.API_KEY
	}
};

module.exports = { emailService, keyService }
