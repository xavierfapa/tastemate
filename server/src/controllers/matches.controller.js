import Match from '../models/matches.model.js';

export async function postMatch (req, res) {
  try {
    const { user1, user2 } = req.body;

    if (!user1 || !user2) {
      return res.status(400).json({ message: 'User Ids required' });
    }

    const existingMatch = await Match.findOne({ $or: [{ user1, user2 }, { user1: user2, user2: user1 }] });

    if (existingMatch) {
      return res.status(400).json({ message: 'Already exists a match' });
    }

    const newMatch = new Match({ user1, user2 });

    const savedMatch = await newMatch.save();

    res.status(201).json(savedMatch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating the match' });
  }
}

export async function getMatches (req, res) {
  try {
    const userId = req.params.userId;
    const matches = await Match.find({ $or: [{ user1: userId }, { user2: userId }] });
    // const matches = await Match.find({ $or: [{ user1: userId }, { user2: userId }] })
    // .populate('user1')
    // .populate('user2');

    res.status(200).json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los matches' });
  }
};

export async function checkIfMatchExists(req, res) {
  try {
    const { user1, user2 } = req.query;

    const existingMatch = await Match.findOne({
      $or: [
        { user1, user2 },
        { user1: user2, user2: user1 },
      ],
    });
    if (existingMatch) {
      console.log(existingMatch);
      // return res.status(200).json({ matchExists: true });
      return res.status(200).json(existingMatch)
      // return res.status(200).json({ matchExists: true, matchInfo: existingMatch });
    }

    return res.status(200).json({ matchExists: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Verfication error' });
  }
}

export const updateMatch = async (req, res) => {
  try {
    const { user1, user2 } = req.body;

    const existingMatch = await Match.findOne({
      $or: [
        { user1, user2 },
        { user1: user2, user2: user1 },
      ],
    });

    if (!existingMatch) {
      return res.status(404).json({ message: 'Match not found' });
    }

    existingMatch.mutualMatch = true;
    await existingMatch.save();

    return res.status(200).json(existingMatch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update mutualMatch' });
  }
};