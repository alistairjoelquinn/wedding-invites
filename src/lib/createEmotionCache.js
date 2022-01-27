const createCache = require('@emotion/cache');

module.exports = function createEmotionCache() {
    return createCache.default({ key: 'css', prepend: true });
};
