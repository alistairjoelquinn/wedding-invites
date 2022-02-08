export default (val) => {
    if (val === 'true') {
        return true;
    }
    if (val === 'false') {
        return false;
    }
    return val;
};
