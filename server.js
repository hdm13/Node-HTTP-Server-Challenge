import http from 'http';

const server = http.createServer((request, response) => {
    let url = request.url.split('/')
    if (url[1] === '') {
      if (request.method === 'GET') {
        response.end("Hello, Galvanze!");
      }
    }
  });

  server.listen(4000, "localhost", () => {
    console.log(`Server running at localhost:4000/`);
  });