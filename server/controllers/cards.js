import express from 'express';
import mongoose from 'mongoose';
import Card from '../models/card.js';

const router = express.Router();

export const getCards= async (req, res) => { 
    try {
        const cards = await Card.find();
                
        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCard = async (req, res) => {
    const card = req.body;

    const newCard= new Card({ ...card, creator: req.userId })

    try {
        await newCard.save();

        res.status(201).json(newCard );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCard = async (req, res) => {

  const {author, title, description, imgUrl, id, likes, name, creator, favorites, comments} = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

  const updatedCard= { author, title, description, imgUrl, _id: id, likes, name, creator, favorites, comments };

  await Card.findByIdAndUpdate(id, updatedCard, { new: true });

  res.json(updatedCard);
}

export const deleteCard = async (req, res) => {
    
    const {id} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    await Card.findByIdAndRemove(id);

    res.json({ message: "Card deleted successfully." });
}

export const likeCard = async (req, res) => {
    
    const { id } = req.body;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    const card = await Card.findById(id);

    const index = card.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      card.likes.push(req.userId);
    } else {
      card.likes = card.likes.filter((id) => id !== String(req.userId));
    }
    const updatedCard = await Card.findByIdAndUpdate(id, card, { new: true });
    
    res.status(200).json(updatedCard);

}

export const favorCard = async (req, res) => {
    
    const { id } = req.body;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    const card = await Card.findById(id);

    const index = card.favorites.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      card.favorites.push(req.userId);
    } else {
      card.favorites = card.favorites.filter((id) => id !== String(req.userId));
    }
    const updatedCard = await Card.findByIdAndUpdate(id, card, { new: true });
    
    res.status(200).json(updatedCard);

}


export const commentCard = async (req, res) => {
    
  const { id, comment } = req.body;
  

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

  const card = await Card.findById(id);

  console.log(card)

  card.comments.push(comment);

  const updatedCard = await Card.findByIdAndUpdate(id, card, { new: true });
  
  res.status(200).json(updatedCard);

}
export default router;