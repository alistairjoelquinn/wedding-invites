const nameRegex =
    /[${a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËßÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ}][${a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈßÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ}' ,"-]*[${a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍßÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ}'",]+/i;
const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

export function validateIncomingValues(rsvp) {
    console.log('rsvp: ', rsvp);
    let error;

    const fn = rsvp.fullName.match(nameRegex);
    const e = rsvp.email.match(emailRegex);
    const pn = rsvp.partnerName.match(nameRegex);

    if (!fn) {
        error = 'Problem with the full name!';
    } else if (fn && fn[0] !== rsvp.fullName) {
        error = 'Problem with the full name!';
    } else if (!e) {
        error = 'Problem with the email!';
    } else if (e && e[0] !== rsvp.email) {
        error = 'Problem with the email!';
    } else if (!rsvp.partner && rsvp.partnerName) {
        error = 'Did you forget to select YES for bringing a partner?';
    } else if (rsvp.partnerName && !pn) {
        error = 'Problem with the partner name!';
    } else if (pn && pn[0] !== rsvp.partnerName) {
        error = 'Problem with the partner name!';
    }

    return error;
}
