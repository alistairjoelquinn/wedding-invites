const createCache = require('@emotion/cache');

console.log('createCache: ', createCache.default);

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
module.exports = function createEmotionCache() {
    return createCache.default({ key: 'css', prepend: true });
};
