import aws from 'aws-sdk';

const ses = new aws.SES({
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
    region: 'eu-central-1',
});

exports.sendEmail = (recipient, message, subject) =>
    ses
        .sendEmail({
            Source: `Wedding Invitation Response <${process.env.ADMIN_EMAIL}>`,
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
