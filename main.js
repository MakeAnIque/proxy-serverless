const app = require("express")();
const cors = require("cors");
const httpProxy = require("http-proxy");
require("dotenv").config({ path: ".env" });
const proxy = httpProxy.createProxyServer();
//create a server object:
app.use(cors());

app.disable("x-powered-by");
app.use(function (req, res) {
  proxy.web(req, res, {
    target: "http://92.204.128.4:4000",
  });
});
app.listen(3000, () => {
  console.log("server is listening on port", 3000);
});
