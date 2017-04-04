'use strict';

exports.layout = function(content, data) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charSet='utf-8'/>
    <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
    <meta name='renderer' content='webkit'/>
    <meta name='keywords' content='demo'/>
    <meta name='description' content='demo'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <link rel="stylesheet" href="/dist/css/style.css">
  </head>
  <body>
    <div id="root"><div>${content}</div></div>
  <script>
  window.__REDUX_DATA__ = ${JSON.stringify(data)};
  </script>
  <script src="/dist/js/index.js"></script>
  </body>
  </html>
`;
};