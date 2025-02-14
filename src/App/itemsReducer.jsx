import { useReducer } from 'react';

const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'add_item': {
      return [...state, action.id];
    }
    case 'delete_item': {
      const updatedState = [];
      let deleteOnce = true;

      state.forEach((item) => {
        if (item.id === (action.id && deleteOnce)) {
          deleteOnce = false;
        } else {
          updatedState.push(item);
        }
      });

      return updatedState;
    }
  }
};

export { itemsReducer };
