exports.apiDoc = {
    openapi: '3.0.0',
    info: {
        title: 'API',
        version: '1.0.0',
        description: 'API',
    },
    servers: [
        {
            url: 'http://localhost:4000',
        },
    ],
    paths: {
        '/user/getUser': {
            get: {
                tags: ['User'],
                description: 'Get all users',
                operationId: 'getUsers',
                responses: {
                    '200': {
                        description: 'Users were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/User',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'The user id',
                        required: true,
                    },
                    email: {
                        type: 'string',
                        description: "The user's email",
                        required: true,
                    },
                    password: {
                        type: 'string',
                        description: "The user's password",
                        required: true,
                    },
                    avatar: {
                        type: 'string',
                        description: "The user's avatar",
                    },
                },
            },

        },
    },

    security: [
        {
            bearerAuth: [],
        },
    ],
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    },
};