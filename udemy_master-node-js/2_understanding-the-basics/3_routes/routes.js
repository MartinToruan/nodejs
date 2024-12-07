const fs = require('fs');

const requestHandler = (req, resp) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        resp.write('<html>');
        resp.write('<head><title>Enter Message</title></head>');
        resp.write(
            `<body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>`
        )
        resp.write('</html>');
        return resp.end();
    }
}

module.exports = requestHandler