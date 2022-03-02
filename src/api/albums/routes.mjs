const routes = (handler) => [
    {
        method: 'POST',
        path: '/albums',
        handler: handler,
    },
    {
        method: 'GET',
        path: '/albums/{id}',
        handler: handler,
    },
    {
        method: 'PUT',
        path: '/albums/{id}',
        handler: handler,
    },
    {
        method: 'DELETE',
        path: '/albums/{id}',
        handler: handler,
    }
]