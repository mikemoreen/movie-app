export default (cards = [], action) => {

  switch (action.type) {
    case "LOAD_CARDS":
      return null;
      
    case "LOAD_CARDS_FAILURE":
      return null;

    case "FETCH_ALL":
      return action.payload;
  
    case "CREATE":
      return [...cards, action.payload];
      
    case "UPDATE":
    return cards.map((card) => (card._id === action.payload._id ? action.payload : card));

    case "DELETE":
      return cards.filter((card) => card._id !== action.payload);

    case "LIKE":
      return cards.map((card) => (card._id === action.payload._id ? action.payload : card));

    case "FAVOUR":
      return cards.map((card) => (card._id === action.payload._id ? action.payload : card));

    case "COMMENT":
      return cards.map((card) => (card._id === action.payload._id ? action.payload : card));

    default:
    return cards;
  }

};