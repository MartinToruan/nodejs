const handlers = (req, resp) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        resp.setHeader('Content-Type', 'text/html; charset=utf-8');
        resp.write(`
            <html>
                <head>
                    <title>Welcome</title>
                </head>           
                <body>
                    <h1>Welcome to the assignment!</h1>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="submit">Register</button>
                    </form>
                </body> 
            </html>
        `);
        return resp.end();
    } else if (url === '/users' && method === 'GET') {
        resp.setHeader('Content-Type', 'text/html; charset=utf-8');
        resp.write(`
            <html>
                <head>
                    <title>Users</title>
                </head>
                <body>
                    <h1>User List</h1>
                    <ul>
                        <li>Kristopel</li>
                        <li>Martin</li>
                        <li>Lumban</li>
                        <li>Toruan</li>
                    </ul>
                </body>
            </html>
        `);
        return resp.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(`New User: ${username}`);
            resp.statusCode = 302;
            resp.setHeader('Location', '/');

            return resp.end();
        })
    }



}

exports.handlers = handlers;