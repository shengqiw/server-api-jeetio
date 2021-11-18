import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  const data = await fetch("https://api.publicapis.org/entries").then((r) =>
    r.json()
  );
  res.status(200).send(data);
});
app.listen(8080, function () {
  console.log("Example app listening on port 3000!");
});
