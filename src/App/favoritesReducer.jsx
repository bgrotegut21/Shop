import { useReducer } from 'react';

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'favorite_item': {
      console.log('activating');
      const filteredItemsArray = state.filter((item) => item.id === action.id);
      const hasItem = filteredItemsArray.length > 0;

      if (hasItem) return state.filter((item) => item.id !== action.id);
      return [...state, action.id];
    }
  }
};

export { favoritesReducer };
