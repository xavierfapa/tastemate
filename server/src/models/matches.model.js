import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mutualMatch: { type: Boolean, default: false },
  matchedAt: { type: Date, default: Date.now },
});


export default mongoose.model('Match', matchSchema);
