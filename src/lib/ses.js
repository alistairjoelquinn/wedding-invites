/* eslint-disable prettier/prettier */
exports.checkResponse = (rsvp) => {
    let response;
    if (rsvp.attending === 'yes') {
        response = `
            You received another response to the wedding! ${rsvp.fullName} is going to attend!

            ${rsvp.partner === "true" ? `They are bringing a plus one called ${rsvp.partnerName}.` : `They are coming alone.`}

            ${rsvp.children
                ? `They are bringing ${rsvp.numberOfChildren} children.`
                : `They are not bringing any children.`
            }
        `;
    } else if (rsvp.attending === 'maybe') {
        response = `
            You received another response to the wedding! ${rsvp.fullName} is a maybe for now.

            ${rsvp.partner ? `If they do come they are bringing a plus one called ${rsvp.partnerName}.` : `If they do come they are coming alone.`}

            ${rsvp.children
                ? `If they do come they are bringing ${rsvp.numberOfChildren} children.`
                : `If they do come they are not bringing any children.`
            }
        `;
    } else if (rsvp.attending === 'no') {
        response = `
            You received another response to the wedding. ${rsvp.fullName} is not able to attend.
        `;
    }
    console.log('RESPONSE function is running');
    return response;
}

