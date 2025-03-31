const url = require('url');

const myUrl = new URL('https://example.com:8000/pathname?name=John&age=25#section1');

console.log('Href:', myUrl.href);
console.log('Protocol:', myUrl.protocol);
console.log('Host:', myUrl.host);
console.log('Hostname:', myUrl.hostname);
console.log('Port:', myUrl.port);
console.log('Pathname:', myUrl.pathname);
console.log('Search:', myUrl.search);
console.log('Search Params:', myUrl.searchParams);
console.log('Hash:', myUrl.hash);
