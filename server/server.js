import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

const message = {
  message: "I am your father"
}

const postMessage = {
  message: "Message received"
};

//endpoint (s)

app.get("/message", function (request, response) {
  response.json(message);
});

app.post("/message", (req, res) => {
  console.log("req.body", req.body);
  res.json(postMessage);
});


// start the server

app.listen(8080, function () {
  console.log("server is listening on port 8080");
});
