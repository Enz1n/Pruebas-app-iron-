import { environment } from "./environment/environment";
import { PixelEventModel } from "./app/models";

import * as express from "express";
const mongoose = require("mongoose");
let app: express.Application = express();
import * as bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  next();
});

app.get("/", async (req, res) => {
  try {
    res.redirect(`https://ironfunnel.com`);
  } catch (error) {
    return404(req, res);
  }
});

app.post("/collect", async (req, res) => {
  try {
    try {
      let events = req.body.events;
      for (const item of events) {
        let event = await PixelEventModel.create({
          _collector : environment.COLLECTOR,
          headers : req.headers,
          pixelId: req.body.pixelId,
          location: req.hostname,
          eventType: item.id,
          data: item.data,
          date: item.date,
        });
        await event.save();
      }
    } catch (_) { }
    res.status(200).send({});

  } catch (error) {
    return404(req, res);
  }
});

const return404 = (req, res) => {
  res.status(404).send();
}

const return500 = (req, res) => {
  res.status(500).send();
}

app.listen((environment.EXPRESS_PORT), async () => {
  await mongoose.connect(environment.DATABASE.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Pixel Collector | Port " + environment.EXPRESS_PORT);
});