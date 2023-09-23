import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mutualMatch: { type: Boolean, default: false },
  matchedAt: { type: Date, default: Date.now },
});


export default mongoose.model('Match', matchSchema);


// Usuario A da like a la receta de Usuario B.
// Verifica si hay un documento de match existente entre Usuario A y Usuario B. Si no existe, crea uno nuevo con mutualMatch establecido en false.
// Usuario B ve el like de Usuario A y da like a la receta de Usuario A.
// En este punto, cuando Usuario B da like, puedes verificar si existe un documento de match entre los dos usuarios y si mutualMatch es false. Si es así, actualiza el campo mutualMatch a true en el documento existente, lo que indica que es un match mutuo.