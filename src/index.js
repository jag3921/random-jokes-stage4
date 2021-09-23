// Random Jokes returend as json
const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses');
const responseHandler = require('./responses');

const urlStruct = {
    '/random-joke': responseHandler.getRandomJokeResponse,
    '/random-jokes': responseHandler.getRandomJokeResponse,
    notFound: htmlHandler.get404Response
};
// eslint-disable-next-line
const port = process.env.PORT || process.env.NODE_PORT || 3000;


const onRequest = (req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const params = query.parse(parsedUrl.query);
// Will organize better in phase 3
    let url1 = 'random-joke';
    let url2 = 'random-joke?limit=10';
    // For phase 3
    let acceptedTypes = req.headers.accept && req.headers.accept.split(',');
    acceptedTypes = acceptedTypes || [];
    console.log(acceptedTypes);
  


    if (urlStruct[pathname]) {
        urlStruct[pathname](req, res, params, acceptedTypes);
    } else {
        urlStruct.notFound(req, res, url1, url2);
    }
}

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);

