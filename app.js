const nodemailer = require("nodemailer");

const maillist = [
    '****.bram@****.com',
    '****.shah@****.com',
    '****.styles@****.com',
];
// Defines recipients

async function main() {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "***-example-person@gmail.com",
            pass: "your-password",
            // ⚠️ Use environment variables set on the server for these values when deploying
        },
    });

    let info = await transporter.sendMail({
        from: '"You" <***-example-person@gmail.com>',
        to: maillist, // Mails to array of recipients
        subject: "Testing, testing, 123",
        html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
    });

    console.log(info.messageId);
    console.log(info.accepted); // Array of emails that were successful
    console.log(info.rejected); // Array of unsuccessful emails
}

main()
    .catch(err => console.log(err));