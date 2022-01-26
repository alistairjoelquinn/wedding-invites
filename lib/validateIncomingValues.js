export default (rsvp) => {
    let error;
    if (!rsvp.name.match(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$)/i)) {
        error = 'Sorry there was a problem with the full name field';
    } else if (
        !rsvp.email.match(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        )
    ) {
        error = 'Sorry there was a problem with the email field';
    }

    return error;
};
