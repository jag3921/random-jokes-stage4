// import fetch from 'node-fetch';
// To be worked on

 // eslint-disable-next-line no-use-before-define
    /*
    const getResponse = (request, response, params, acceptedTypes, httpMethod) => {
        if (httpMethod === 'HEAD') {
            const getBinarySize = string => Buffer.byteLength(string, 'utf8'); //eslint-disable-line
            response.writeHead(200, {'Content-Type': 'text/plain', 'Content-Length': getBinarySize()});
            response.end();
        }
        if (!acceptedTypes.includes('text/xml')) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(fetchJokeJSON(params.limit));
            response.end();
        }
        if (acceptedTypes.includes('text/xml')) {
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.write(fetchJokeXML(params.limit));
            response.end();
           
        }
    }


function returnRandomNumber() {
    let num = Math.floor(Math.random() * 10);
    return num;
}

module.exports.getResponse = getResponse;
*/