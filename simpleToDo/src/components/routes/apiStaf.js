import express from "express";
import { Staf } from "../../../db/models";
import checkPrivMiddleware from "../../middlewares/checkPrivMiddleware";

const apiStaf = express.Router();

apiStaf.post("/addstaf", async (req, res) => {
  const { stafName, opisanie, photo, price } = req.body;
  if (!stafName && !opisanie && !photo && !price) res.sendStatus(401);
  try {
    const newStaf = await Staf.create({
      stafName,
      opisanie,
      photo,
      price,
      userId: req.session.user.id,
    });
    return res.json(newStaf);
  } catch (eroMassage) {
    console.log(eroMassage);
    res.sendStatus(500);
  }
});

apiStaf.delete("/:id", checkPrivMiddleware, async (req, res) => {
  try {
    console.log(req.params.id, "<==========");
    await Staf.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

apiStaf.patch("/change/:id", checkPrivMiddleware, async (req, res) => {
  try {
    await Staf.update(
      { price: req.body.newPrice },
      { where: { id: req.params.id } }
    );
    const updateStaf = await Staf.findByPk(req.params.id);
    res.json(updateStaf);
  } catch (err) {
    res.sendStatus(500);
  }
});
export default apiStaf;
