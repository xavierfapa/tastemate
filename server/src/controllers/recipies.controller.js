import Recipie from '../models/recipies.model.js';

export async function createRecipie (req, res) {
  const { title, description, ingridients, userId } = req.body;
  console.log(req.body)

  const newRecipie = new Recipie({
    title,
    description,
    ingridients,
    userId
  })
  const savedRecipie = await newRecipie.save();
  res.json(savedRecipie);
}

export async function getOthersRecipies (req, res) {
  const { userId } = req.body;
  const recipies = await Recipie.find({
    userId: { $ne: userId }
  }).exec();

  res.json(recipies);
}

export async function getUserRecipies (req, res) {
  const { id } = req.params;
  const recipies = await Recipie.find({
    userId: id
  });
  res.json(recipies);
}

export async function getRecipie (req, res) {
  const recipie = await Recipie.findById(req.params.id);
  if (!recipie) return res.status(404).json({message: "No recipie found"});
  res.json(recipie);
}

export async function deleteRecipie (req, res) {
  const recipie = await Recipie.findByIdAndDelete(req.params.id);
  if (!recipie) return res.status(404).json({message: "No recipie found"});
  res.sendStatus(204);
}

export async function updateRecipie (req, res) {
  const recipie = await Recipie.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (!recipie) return res.status(404).json({message: "No recipie found"});
  res.json(recipie);
}
