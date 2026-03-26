const express = require('express');
const { ObjectId } = require('mongodb');

module.exports = (projectsCollection) => {
  const router = express.Router();

  // GET all projects
  router.get('/', async (req, res) => {
    const result = await projectsCollection.find().toArray();
    res.send(result);
  });

  // POST new project
  router.post('/', async (req, res) => {
    const newProject = req.body;
    const result = await projectsCollection.insertOne(newProject);
    res.status(201).json({ insertedId: result.insertedId });
  });

  // DELETE project
  router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await projectsCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ deletedCount: result.deletedCount });
  });

  // UPDATE project
  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedDoc = { $set: req.body };
    const result = await projectsCollection.updateOne({ _id: new ObjectId(id) }, updatedDoc);
    res.json({ modifiedCount: result.modifiedCount });
  });

  return router;
};