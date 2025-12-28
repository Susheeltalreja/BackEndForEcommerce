const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "testemailsmtp1236@gmail.com",
        pass: "sezr xjbj tald lqmv"
    }
})

module.exports = transport;