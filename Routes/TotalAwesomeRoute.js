const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // If the request has the max value
  if (req.body != undefined) {
    const maxValue = req.body.maxValue;
    // The max value needs to be bigger than 0
    if (maxValue > 0) {
      // caculate the sum of awesom numbers from 0 to maxValue
      let total = 0;
      for (let number = 0; number <= maxValue; number++) {
        if (number % 3 == 0 || number % 7 == 0) {
          total = total + number;
        }
      }
      // return the total in JSON
      res.json({ totalAwesomNumber: total });
    } else {
      res.send("THE MAX VALUE NEED TO BE BIGGER THAN ZERO!");
    }
  } else {
    // If the request does not have max value
    res.send("YOUR HAVE NOT SENT ME THE MAX NUMBER YET!");
  }
});

module.exports = router;
