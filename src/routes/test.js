const router = require('express').Router();


router.get("/", async (req, res) => {
    console.log("##########################");
    console.log("req.headers: ");
    console.log(req.headers);
  
    res.status(200).send({ result: "Secured Resource"});
  });


module.exports = router





