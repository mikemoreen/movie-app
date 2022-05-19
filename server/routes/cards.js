import express from 'express';

import { getCards, createCard, updateCard, deleteCard, likeCard, favorCard, commentCard } from '../controllers/cards.js';
import auth from "../middleware/auth.js";

const router = express.Router();


router.get('/', getCards);
router.post('/add_card', auth, createCard);
router.patch('/update',  auth, updateCard);
router.delete('/delete', auth,  deleteCard);
router.patch('/like' , auth, likeCard);
router.patch('/favour' , auth, favorCard);
router.patch('/comment' , auth, commentCard);
export default router