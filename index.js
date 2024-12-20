require("./instrument");

// Now require other modules
const express = require("express");
const Sentry = require("@sentry/node");

const app = express();
const port = 8000;

function bubble(arr) {
  //bubble sort for computation
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

app.get("/", function (req, res) {
  var arr = Array.from({ length: 40_000 }, () =>
    Math.floor(Math.random() * 4000)
  );
  console.log("before bubble()");
  bubble(arr);
  console.log("after bubble()");
  res.end("hiii");
});

Sentry.setupExpressErrorHandler(app);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
