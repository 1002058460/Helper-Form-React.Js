const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./models');
const { sequelize } = require('./models');
const { candidate } = require("./models");
const { medicalHistory } = require("./models");
const { skillsSEA } = require("./models");
const { skillsTCEA } = require("./models");

const main = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  const PORT = 5001;
  app.post("/candidate", (req, res) => {
    const { id, photo, linkVideo, passportStatus, bioFee, loan, pocketMoney, minimumSalary, maritalStatus,
      experienceInSG, skills, remarks, fullName, dateOfBirth, placeOfBirth, height, weight, nationality,
      phoneNumber, address, port, religion, education, siblings, ageOfChild, status } = req.body;
    candidate.create({
      id, photo, linkVideo, passportStatus, bioFee, loan, pocketMoney, minimumSalary, maritalStatus,
      experienceInSG, skills, remarks, fullName, dateOfBirth, placeOfBirth, height, weight, nationality,
      phoneNumber, address, port, religion, education, siblings, ageOfChild, status
    }).then(() => {
      res.status(204).send();
    })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);

      });

  });

  app.post("/medicalHistory", (req, res) => {
    const { id, allergies, mentalIllness, epilepsy, asthma, diabetes, hypertension, tubercolosis, heartDisease,
      malaria, operations, otherIllness, disabilities, diet, pork, beef, otherFoods, preference,
      remarkFood } = req.body;
    medicalHistory.create({
      id, allergies, mentalIllness, epilepsy, asthma, diabetes, hypertension, tubercolosis, heartDisease,
      malaria, operations, otherIllness, disabilities, diet, pork, beef, otherFoods, preference,
      remarkFood
    }).then(() => {
      res.status(204).send();
    })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);

      });

  });

  app.post("/skillsSEA", (req, res) => {
    const { id, infants1, infants2, infantsText, careElderly1, careElderly2, careElderlyText, careDisabled1, careDisabled2,
      careDisabledText, genHouse1, genHouse2, genHouseText, cooking1, cooking2, cookingText, lang1, lang2,
      langText1, langText2, otherSkills1, otherSkills2, otherSkillsText1, otherSkillsText2 } = req.body;
    skillsSEA.create({
      id, infants1, infants2, infantsText, careElderly1, careElderly2, careElderlyText, careDisabled1, careDisabled2,
      careDisabledText, genHouse1, genHouse2, genHouseText, cooking1, cooking2, cookingText, lang1, lang2,
      langText1, langText2, otherSkills1, otherSkills2, otherSkillsText1, otherSkillsText2
    }).then(() => {
      res.status(204).send();
    })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);

      });

  });

  app.post("/skillsTCEA", (req, res) => {
    const { id, infants3, infants4, infantsTextB, careElderly3, careElderly4, careElderlyTextB, careDisabled3, careDisabled4,
      careDisabledTextB, genHouse3, genHouse4, genHouseTextB, cooking3, cooking4, cookingTextB, lang3, lang4,
      langText3, langText4, otherSkills3, otherSkills4, otherSkillsText3, otherSkillsText4 } = req.body;
    skillsTCEA.create({
      id, infants3, infants4, infantsTextB, careElderly3, careElderly4, careElderlyTextB, careDisabled3, careDisabled4,
      careDisabledTextB, genHouse3, genHouse4, genHouseTextB, cooking3, cooking4, cookingTextB, lang3, lang4,
      langText3, langText4, otherSkills3, otherSkills4, otherSkillsText3, otherSkillsText4
    }).then(() => {
      res.status(204).send();
    })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err.message);

      });

  });

  app.get('/candidate', (req, res) => {
    candidate.findAll()
      .then((candidate) => {
        res.send(candidate);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  app.get('/alexcandidate', (req, res) => {
    candidate.findByPk(1)
      .then((candidate) => {
        res.send(candidate);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  app.put('/alexcandidate/:id', async (req, res) => {
    const { id } = req.params;
    const { status, photo, linkVideo, passportStatus: passport, bioFee, loan, pocketMoney, minimumSalary, maritalStatus,
      experienceInSG: exsg, remarks, fullName, dateOfBirth, placeOfBirth, height, weight, nationality,
      phoneNumber, address, port, religion, education: edu, siblings, ageOfChild: aoc,
      remarkFood: remar, } = req.body;
    
    const result = await candidate.findOne({ where: { id: id } });

    if (!result) {
      return res.send('id not found');
    }

    try {
      const transaction = await sequelize.transaction();
      
      const update = await result.update({ status, photo, linkVideo, passportStatus: passport, bioFee, loan, pocketMoney, minimumSalary, maritalStatus,
        experienceInSG: exsg, remarks, fullName, dateOfBirth, placeOfBirth, height, weight, nationality,
        phoneNumber, address, port, religion, education: edu, siblings, ageOfChild: aoc,
        remarkFood: remar, });

      await transaction.commit();

      return res.send(update);
    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  })

  app.get('/alexmedical', (req, res) => {
    medicalHistory.findByPk(1)
      .then((medicalHistory) => {
        res.send(medicalHistory);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  app.put('/alexmedical/:id', async (req, res) => {
    const { id } = req.params;
    const { allergies, mentalIllness: mental, epilepsy, asthma, diabetes, hypertension: hyper, tubercolosis: tbc, heartDisease: heart,
      malaria, operations, otherIllness: othersIll, disabilities, diet, pork, beef, otherFoods: othersFood, preference, remarkFood} = req.body;
    
    const result = await medicalHistory.findOne({ where: { id: id } });

    if (!result) {
      return res.send('id not found');
    }

    try {
      const transaction = await sequelize.transaction();
      
      const update = await result.update({ allergies, mentalIllness: mental, epilepsy, asthma, diabetes, hypertension: hyper, tubercolosis: tbc, heartDisease: heart,
        malaria, operations, otherIllness: othersIll, disabilities, diet, pork, beef, otherFoods: othersFood, preference, remarkFood });

      await transaction.commit();

      return res.send(update);
    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  })

  app.get('/alexskillsSEA', (req, res) => {
    skillsSEA.findByPk(1)
      .then((skillsSEA) => {
        res.send(skillsSEA);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  app.put('/alexskillsSEA/:id', async (req, res) => {
    const { id } = req.params;
    const { infants1, infants2, infantsText, careElderly1, careElderly2, careElderlyText, careDisabled1, careDisabled2,
      careDisabledText, genHouse1, genHouse2, genHouseText, cooking1, cooking2, cookingText, lang1, lang2,
      langText1, langText2, otherSkills1, otherSkills2, otherSkillsText1, otherSkillsText2,} = req.body;
    
    const result = await skillsSEA.findOne({ where: { id: id } });

    if (!result) {
      return res.send('id not found');
    }

    try {
      const transaction = await sequelize.transaction();
      
      const update = await result.update({ infants1, infants2, infantsText, careElderly1, careElderly2, careElderlyText, careDisabled1, careDisabled2,
        careDisabledText, genHouse1, genHouse2, genHouseText, cooking1, cooking2, cookingText, lang1, lang2,
        langText1, langText2, otherSkills1, otherSkills2, otherSkillsText1, otherSkillsText2, });

      await transaction.commit();

      return res.send(update);
    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  })

  app.get('/alexskillsTCEA', (req, res) => {
    skillsTCEA.findByPk(1)
      .then((skillsTCEA) => {
        res.send(skillsTCEA);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  app.put('/alexskillsTCEA/:id', async (req, res) => {
    const { id } = req.params;
    const { infants3, infants4, infantsTextB, careElderly3, careElderly4, careElderlyTextB, careDisabled3, careDisabled4,
      careDisabledTextB, genHouse3, genHouse4, genHouseTextB, cooking3, cooking4, cookingTextB, lang3, lang4,
      langText3, langText4, otherSkills3, otherSkills4, otherSkillsText3, otherSkillsText4,} = req.body;
    
    const result = await skillsTCEA.findOne({ where: { id: id } });

    if (!result) {
      return res.send('id not found');
    }

    try {
      const transaction = await sequelize.transaction();
      
      const update = await result.update({ infants3, infants4, infantsTextB, careElderly3, careElderly4, careElderlyTextB, careDisabled3, careDisabled4,
        careDisabledTextB, genHouse3, genHouse4, genHouseTextB, cooking3, cooking4, cookingTextB, lang3, lang4,
        langText3, langText4, otherSkills3, otherSkills4, otherSkillsText3, otherSkillsText4,});

      await transaction.commit();

      return res.send(update);
    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  })

  db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
      console.log("server running PORT 5001");
    });
  });
};

main().catch((err) => {
  console.log(err);
});