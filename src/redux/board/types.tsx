export interface BoardMetadata {
  image: Record<string, unknown>
}

export interface BoardCard {
  image: string
  label: string
}

export interface BoardState {
  metadata: BoardMetadata
  cards: BoardCard[]
}

export enum BOARD_ACTIONS {
  LOAD_BOARD = 'LOAD_BOARD'
}

export type LoadBoardPayload = string;

interface LoadBoardAction {
  type: typeof BOARD_ACTIONS.LOAD_BOARD
  payload: LoadBoardPayload
}

export type BoardActionTypes = LoadBoardAction
