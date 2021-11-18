import express from "express";
import fetch from "node-fetch";

const app = express();

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
  ).then((res) => wrapJSX(res.json()));

  res.status(200).send(data);
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

const wrapJSX = (data) => {
  return Object.keys(data).map((key) => `{key}: data[key]\n`);
};
