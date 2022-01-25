export default (data) => {
    if (data.fullName === '') {
        return 'Remember your name!';
    }
    if (data.email === '') {
        return 'Remember your email!';
    }
    return false;
};
