const restify = require("restify");
const corsMiddleWare = require("restify-cors-middleware");
const connectMongoDB = require("./db/db.js");

require("dotenv").config();

let cors = corsMiddleWare({
  preflightMaxAge: 5,
  origins: ["*"],
})

connectMongoDB();


const respond = (req, res, next) => {
  res.send("hello there " + req.params.name);
  next();
};

let server = restify.createServer({
  name: process.env.API_NAME,
  version: process.env.VERSION,
});

server.pre((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use((req, res, next) => {
  console.warn(`REQUEST: ${req.headers.host + req.url}`);
  return next();
});
server.listen(process.env.PORT, () => {
  require("./routes")(server);
  console.log("Server ready on %s", server.name, server.url);
});
