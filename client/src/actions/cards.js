import {fetchCards, createCard, updateCard, deleteCard, likeCard, favourCard, commentCard} from '../api/index.js';

export const loadCardsAction = () => ({
  type: "LOAD_CARDS",
});

export const loadCardsFailureAction = () => ({
  type: "LOAD_CARDS_FAILURE",
});

export const loadCardsSuccess = (cards) => ({
  type: "FETCH_ALL",
  payload: cards,
});

const getCardsAction = () => async (dispatch) => {
  dispatch(loadCardsAction());
  try {
    const { data } = await fetchCards();

    dispatch(loadCardsSuccess(data));
  } catch (error) {

    dispatch(loadCardsFailureAction());
    console.log(error.message);
  }
};

 const createCardAction = (card) => async (dispatch) => {
  try {
    const { data } = await createCard(card);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }

};

const updateCardAction = (cards) => async (dispatch) => {
  try {
    const { data } = await updateCard(cards);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCardAction = (id) => async (dispatch) => {
  try {
    await deleteCard(id);

    dispatch({ type:"DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

const likeCardAction = (id) => async (dispatch) => {
  try {
    const { data } = await likeCard(id);

    dispatch({ type: "LIKE", payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

const favourCardAction = (id) => async (dispatch) => {
  try {
    const { data } = await favourCard(id);

    dispatch({ type: "FAVOUR", payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

const commentCardAction = (comment, id) => async (dispatch) => {
  try {
    const { data } = await commentCard(comment, id);

    dispatch({ type: "COMMENT", payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export {getCardsAction, createCardAction, updateCardAction, deleteCardAction, likeCardAction, favourCardAction, commentCardAction}