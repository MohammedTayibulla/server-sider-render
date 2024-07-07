// import express from "express";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import App from "../src/App";

// const app = express();

// app.get("/*", (req, res) => {
//   const entryPoint = ["/main.js"];

//   const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       <App />
//     </StaticRouter>,
//     {
//       bootstrapScripts: entryPoint,
//       onAllReady() {
//         res.statusCode = 200;
//         res.setHeader("Content-type", "text/html");
//         pipe(res);
//       },
//       onShellError(error) {
//         console.error("Server-side rendering error:", error);
//         res.statusCode = 500;
//         res.send("<!doctype html><p>Internal Server Error</p>");
//       },
//     }
//   );
// });

// app.listen(3002, () => {
//   console.log("App is running on http://localhost:3002");
// });


import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import { Helmet } from "react-helmet";

const app = express();

app.get("/*", (req, res) => {
  const context = {};
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `;

  res.status(context.status || 200).send(html);
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
