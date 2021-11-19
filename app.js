import express from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import cors from "cors";

const port = 3000;
const okStatus = 200;
const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const data = await fetch(
    "https://api.clashroyale.com/v1/players/%23P92LLUR8",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU4ODQ3MjA3LWVkNWQtNGE3NS1iODk5LWUyNjRlNzQzNGFiNyIsImlhdCI6MTYzNzI2MDQ3OCwic3ViIjoiZGV2ZWxvcGVyLzExMTU1OTNkLTgwZDctYThjMS01MTA3LTY1OTQwODIxNDI0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzLjIzMy4xMDUuMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.RzRMf3r2gKsahE9edXrHhAdcx2mz_GUF165FRh4Zm6ZripyCzIKtINiPmGpKCPgog1-CJ6OqwQb1Zg4FiwNppQ",
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());

  res.status(okStatus).send(data);
});

app.get("/clan", (req, res) => {
  const data = await fetch("https://api.clashroyale.com/v1/clans/%23PRURJPJP", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU4ODQ3MjA3LWVkNWQtNGE3NS1iODk5LWUyNjRlNzQzNGFiNyIsImlhdCI6MTYzNzI2MDQ3OCwic3ViIjoiZGV2ZWxvcGVyLzExMTU1OTNkLTgwZDctYThjMS01MTA3LTY1OTQwODIxNDI0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzLjIzMy4xMDUuMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.RzRMf3r2gKsahE9edXrHhAdcx2mz_GUF165FRh4Zm6ZripyCzIKtINiPmGpKCPgog1-CJ6OqwQb1Zg4FiwNppQ",
      Accept: "application/json",
    },
  }).then((res) => res.json());

  res.status(okStatus).send(data);
});

app.listen(port, function () {
  console.log("Example app listening on port 3000!");
});
