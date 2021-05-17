const sanitizeHtml = require('sanitize-html');
const whitelist = ['code'];

/**
 * @module bodySanitizer
 */
module.exports = (req, res, next) => {
    if (req.body) {
        for (const propName in req.body) {
            if (!whitelist.includes(propName)) {
                req.body[propName] = sanitizeHtml(req.body[propName]);
            }
        }
    }
    next();
}