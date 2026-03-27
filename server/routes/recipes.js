const express = require("express");
const { ObjectId } = require("mongodb");

module.exports = (recipeCollection) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const result = await recipeCollection.find().toArray();
    res.send(result);
  });

  router.post("/", async (req, res) => {
    const newRecipe = req.body;
    const result = await recipeCollection.insertOne(newRecipe);

    const savedRecipe = {
      ...newRecipe,
      _id: result.insertedId,
    };

    res.status(201).json(savedRecipe);
  });

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await recipeCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ deletedCount: result.deletedCount });
  });

  router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedDoc = { $set: req.body };
    const result = await recipeCollection.updateOne(
      { _id: new ObjectId(id) },
      updatedDoc,
    );
    res.json({ modifiedCount: result.modifiedCount });
  });

  return router;
};
