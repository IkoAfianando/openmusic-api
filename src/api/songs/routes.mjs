const routes = (handler) => [
    {
        method: 'POST',
        path: '/songs',
        handler: handler,
    },
    {
        method: 'GET',
        path: '/songs',
        handler: handler,
    },
    {
        method: 'GET',
        path: '/songs/{id}',
        handler: handler,
    },
    {
        method: 'PUT',
        path: '/songs/{id}',
        handler: handler,
    },
    {
        method: 'DELETE',
        path: '/songs/{id}',
        handler: handler,
    }
];

export {routes};