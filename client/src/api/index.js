import axios from 'axios';

const API = axios.create({ baseURL: 'https://test-movie2.herokuapp.com/' });

// const url = 'http://localhost:5000/';
// https://test-movie2.herokuapp.com/
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
  
export const logIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


export const fetchCards = () => API.get("/");
export const createCard = (newCard) => API.post("/add_card", newCard);
export const updateCard = (updatedCard) => API.patch("/update", updatedCard);
export const deleteCard = (id) => API.delete("/delete", { data: { id } });
export const likeCard = (id) => API.patch("/like", {id});
export const favourCard = (id) => API.patch("/favour", {id});
export const commentCard = (comment,id) => API.patch("/comment", {comment, id});