const aws = require('aws-sdk');

const ses = new aws.SES({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET,
    region: 'eu-central-1',
});

exports.sendEmail = (recipient, message, subject) =>
    ses
        .sendEmail({
            Source: 'Social Animal <alistair@spiced-academy.com>',
            Destination: {
                ToAddresses: [recipient],
            },
            Message: {
                Body: {
                    Text: {
                        Data: message,
                    },
                },
                Subject: {
                    Data: subject,
                },
            },
        })
        .promise()
        .then(() => console.log('it worked!'))
        .catch((err) => console.log(err));
