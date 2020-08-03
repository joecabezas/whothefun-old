import {BOARD_ACTIONS, BoardActionTypes, LoadBoardPayload} from './types';

export const loadBoard = (payload: LoadBoardPayload) : BoardActionTypes => {
  return {
    type: BOARD_ACTIONS.LOAD_BOARD,
    payload: payload,
  };
};
