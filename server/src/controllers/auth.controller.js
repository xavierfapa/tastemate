import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export async function register (req, res) {
  const { email, password, username } = req.body;
  console.log(req.body)

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
  
    const userSaved = await newUser.save();
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
  }
}

export async function login (req, res) {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({email});
    if (!userFound) return res.status(400).json({message: "User not found"});

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({message: "Incorrect password"});
  
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function logout (req, res) {
}

export async function profile (req, res) {
  console.log(req.user)
  const userFound = await User.findById(req.user.id);

  if (!userFound) res.status(400).json({ message: "User not found"});

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
}