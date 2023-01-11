const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;//PATH PARAMETER
            const { lang } = request.query;//QUERY PARAMETER
    
            if(lang==='id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;
        },
    },
];
 
module.exports = routes;

/** RUNNING
 * curl -X GET http://localhost:5000/hello/nico
// output: Hello, nico!
curl -X GET http://localhost:5000/hello
// output: Hello, stranger!
 */