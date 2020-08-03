import {BoardActionTypes, BoardState} from './types';

const initialState: BoardState = {
  metadata: {},
  cards: [],
};

export const chatReducer = (
    state = initialState,
    action: BoardActionTypes,
): BoardState => {
  switch(action.type){
    case BOARD_ACTIONS.LOAD_BOARD:
        return {
          ...state,

        }
  }
};
