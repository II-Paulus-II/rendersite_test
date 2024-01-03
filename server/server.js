import express from "express";
import cors from "cors";

const app = express();

//app.use(express.json());
const withCustomParser = function (req, res, next) {
  let data = "";
  console.log(req.on);
  req.on("data", (chunk) => (data += chunk))
  req.on("end", () => {
    req.rawBody = data;
    req.jsonBody = JSON.parse(data);
    next();
  })
}

app.use(cors());
app.use(withCustomParser);

//app.use(cors());

const message = {
  message: "I am your father"
}

const postMessage = {
  message: "Message received"
};

//endpoint (s)

/*app.get("/message", function (request, response) {
  response.json(message);
});*/

app.post("/message", (req, res) => {
  console.log("req.body", req.jsonBody);
  res.json(postMessage);
});


// start the server

app.listen(8080, function () {
  console.log("server is listening on port 8080");
});
