const path = require("path");
const express = require("express");
const app = express();
const { renderToString } = require("react-dom/server");
const React = require("react");
const App = require("./App").default;
const axios = require("axios");
const html = require("./html");

app.use("/news/:pageNumber", (req, res) => {
  axios
    .get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${req.params.pageNumber}`
    )
    .then((result) => {
      res.send(
        html({
          main: renderToString(<App news={result.data} />),
        })
      );
    })
    .catch((error) => {
      console.log(error);
      res.send(JSON.stringify(error));
    });
});

app.use("/public", express.static(path.join(__dirname, "..", "web-build")));

const PORT = 8080,
  HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`ssr server is listening at ${HOST}:${PORT}`);
});
