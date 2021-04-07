const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const Url = require("./url-model");
const regex = require("requires-regex")();
const dns = require("dns");

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

//=======================================================================================================

var urlencodedParser = bodyParser.urlencoded({ extended: false });

let responseObject = {};

//your post API endpoint
app.post("/api/shorturl/new", urlencodedParser, (req, res) => {
  const formUrl = req.body["url"]; 

  //use regular expression to make sure that the url is a valid one
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi &&
    /^https?:\/\//;


  let regex = new RegExp(expression);

  if (!formUrl.match(regex)) {
    res.json({ error: "invalid url" });
    return; 
  }

  responseObject["original_url"] = formUrl; 

  //create a shortcode
  //arrange the collection in descending order to get the highest shortcode and add 1 to it
  let shortCode = 1;

  Url.findOne({})
    .sort({ shortUrl: "desc" })
    .exec((error, result) => {
      if (!error && result != undefined) {
        shortCode = result.shortUrl + 1;
      }

    //first find if the url exist if yes modify the existing one else create a new one
      if (!error) {
        Url.findOneAndUpdate(
          { originalUrl: formUrl },
          { originalUrl: formUrl, shortUrl: shortCode },
          { new: true, upsert: true },
          (error, savedUrl) => {
            if (!error) {
              responseObject["short_url"] = savedUrl.shortUrl;
              res.json(responseObject);
            }
          }
        );
      }
    });
});

//once the shortcode is create you can use the code as an endpoint which will redirect you to the original url page
app.get("/api/shorturl/:number", (req, res) => {
  let { number } = req.params; //destructure

  Url.findOne({ shortUrl: number }, (error, result) => {
    if (!error && result != undefined) {
      res.redirect(result.originalUrl);
    } else {
      res.json("Url not found!");
    }
  });
});

//===============================================DATABASE================================================

const uri = process.env.MONGO_URI;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log("an error occured " + err);
    }
  }
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb database connected successfully");
});
//======================================================================================================

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
