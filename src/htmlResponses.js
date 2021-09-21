
const errorPage = (url1, url2) => {
  let page = `
  <html>
    <head>
      <title>404 - File Not Found!</title>
    </head>
    <body>
      <h1>404 - File Not Found!</h1>
      <p>Check your URL, or your typing.</p>
      <p> Perhaps you are looking for <a href="${url1}">/random-joke</a> or <a href="${url2}">/random-jokes?limit=10</a>?</p>
    </body>
  </html>`;

  return page;
}
const get404Response = (request, response, url1, url2) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(errorPage(url1, url2));
    response.end();
}

module.exports.get404Response = get404Response;