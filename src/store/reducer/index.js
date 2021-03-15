const initialState = {
  items: [{
    id: 111,
    textN: "Manon Lescaut",
    textD:
      "The story, set in France and Louisiana in the early 18th century, follows the hero, the Chevalier des Grieux, and his lover, Manon Lescaut.",
    textA: "Antoine François Prévost",
    isCompleted: false,
  },
  {
    id: 222,
    textN: "Lived and not lived years",
    textD:
      "Levon is a young famous journalist, who is sent to a Soviet village to prepare an article about teenagers, who committed suicide.",
    textA: "Vardges Petrosyan",
    isCompleted: false,
  },],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "item/create": {
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    }
    case "item/edit": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.payload.itemId) return { ...item };

          return { ...item, textD: action.payload.newValue };
        }),
      };
    }
    case "item/delete": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      };
    }
    case "item/onToggleComplete": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.payload.itemId) return { ...item };

          return { ...item, isCompleted: !item.isCompleted };
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
