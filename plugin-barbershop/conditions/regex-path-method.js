/**
 * Condition to check if the request URL matches a regex and optionally check the HTTP method.
 */

module.exports = {
    name: 'regex-path-method',
    handler: function (req, conditionConfig) {
        const regex = new RegExp(conditionConfig.regexPath)
        if (conditionConfig.method) {
            return (regex.test(req.url) && req.method === conditionConfig.method)
        }
        return regex.test(req.url)
    },
    schema: {
        $id: 'http://express-gateway.io/schemas/conditions/regex-path-method.json',
        type: 'object',
        properties: {
            regexPath: {
                type: 'string'
            },
            method: {
                type: 'string'
            }
        },
        required: ['regexPath']
    }
}