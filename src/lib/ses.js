/* eslint-disable prettier/prettier */
const aws = require('aws-sdk');

const ses = new aws.SES({
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
    region: 'eu-central-1',
});

function checkResponse(rsvp) {
    let response;
    if (rsvp.attending === 'yes') {
        response = `
            You received another response to wedding! ${rsvp.fullName} is going to attend!

            ${rsvp.partner ? `They are bringing a plus one called ${rsvp.partnerName}.` : `They are coming alone.`}

            ${rsvp.children
                ? `They are bringing ${rsvp.numberOfChildren} children.`
                : `They are not bringing any children.`
            }
        `;
    } else if (rsvp.attending === 'maybe') {
        response = `
            You received another response to wedding! ${rsvp.fullName} is a maybe for now.

            ${rsvp.partner ? `If they do come they are bringing a plus one called ${rsvp.partnerName}.` : `If they do come they are coming alone.`}

            ${rsvp.children
                ? `If they do come they are bringing ${rsvp.numberOfChildren} children.`
                : `If they do come they are not bringing any children.`
            }
        `;
    } else if (rsvp.attending === 'no') {
        response = `
            You received another response to wedding. ${rsvp.fullName} is not able to attend.
        `;
    }
    return response;
}


exports.sendEmail = (rsvp) => ses
    .sendEmail({
        Source: `Wedding Invitation Response <${process.env.ADMIN_EMAIL}>`,
        Destination: {
            ToAddresses: [process.env.USER_EMAIL],
        },
        Message: {
            Body: {
                Text: {
                    Data: checkResponse(rsvp),
                },
            },
            Subject: {
                Data: `Wedding response from ${rsvp.fullName}`,
            },
        },
    })
    .promise()
    .then(() => console.log('Email sent'))
    .catch((err) => console.log(err))
