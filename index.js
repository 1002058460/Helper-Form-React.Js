const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./models');
const { sequelize } = require('./models');
const { job } = require("./models");

const main = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  const PORT = 5002;

  app.post("/job", (req, res) => {
    const { helperCode, empName, fdw, race, salary, daysOff, probation, houseType, bedroom, toilet, family, babies,
      childBelow12, childBelow5, fetchChild, downstairs, busOnly, lookElderly, healthy, assist, bedridden, generalHouseWork,
      iron, cook, clothes, carWash, pets, garden, jobRemarks, helperNameSign, empNameSign, imageURL } = req.body;
    job.create({
      helperCode, empName, fdw, race, salary, daysOff, probation, houseType, bedroom, toilet, family, babies,
      childBelow12, childBelow5, fetchChild, downstairs, busOnly, lookElderly, healthy, assist, bedridden, generalHouseWork,
      iron, cook, clothes, carWash, pets, garden, jobRemarks, helperNameSign, empNameSign, imageURL
    }).then(() => {
      res.status(204).send();
    })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);

      });

  });

  db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
      console.log("server running PORT 5002");
    });
  });
};

main().catch((err) => {
  console.log(err);
});