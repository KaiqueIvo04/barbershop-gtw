'use strict'

/**
 * Plug-in export file
 * Where all plug-in policies, conditions, and routes are logged
 */
// const fs = require('fs')
module.exports = {
    version: '1.0.0',
    init: (pluginContext) => {
        // pluginContext.registerGatewayRoute(require('./routes/middlewares'))
        pluginContext.registerPolicy(require('./policies/authentication/jwt-policy'))
        pluginContext.registerPolicy(require('./policies/authorization/jwt-scopes-policy'))
        pluginContext.registerPolicy(require('./policies/auth/auth-policy'))
        pluginContext.registerPolicy(require('./policies/body-parser/body-parser-policy'))
        // pluginContext.registerPolicy(require('./policies/delete-user/delete-user-policy'))
        // pluginContext.registerPolicy(require('./policies/recaptcha/recaptcha-policy'))
        pluginContext.registerCondition(require('./conditions/regex-path-method'))
    },
    // this is for CLI to automatically add to "policies" whitelist in gateway.config
    policies: [
        'jwt-policy',
        'jwtScopes-policy',
        'auth-policy',
        'body-parser-policy',
        // 'delete-user-policy',
        // 'recaptcha-policy'
    ],
    schema: {
        $id: 'http://express-gateway.io/schemas/plugins/express-apigtw-base-plugin.json',
        type: 'object',
        properties: {}
    }
}