import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    imgUrl: String,
    likes: { type: [String], default: [] },
    name:String,
    creator:String,
    favorites: { type: [String], default: [] },
    comments: { type: [String], default: [] },
})

const Card = mongoose.model('Card', cardSchema);

export default Card;