# Node.js Server Hang: Missing 'res.end()'

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` in the response handler.  This can lead to the server hanging and becoming unresponsive.

## The Bug (server.js)

The `server.js` file contains a simple HTTP server that intentionally omits the `res.end()` call.  This causes the connection to remain open indefinitely.

## The Solution (server-fixed.js)

The `server-fixed.js` file shows the corrected code.  By adding `res.end()`, the response is properly closed, freeing up the server to handle subsequent requests.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Make a request to `http://localhost:3000`.
4. Observe that the server remains unresponsive to further requests (you will notice this by trying to run curl or similar tool).
5. Run `node server-fixed.js`.
6. Make requests to `http://localhost:3000`.  The server should now respond correctly to each request.

This example highlights the importance of proper resource management in Node.js to prevent performance issues and ensure server stability.