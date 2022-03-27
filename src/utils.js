import { WINING_COMBINATIONS } from './constants';

export const findWinner = (currentPlayer, playersData) => WINING_COMBINATIONS.some((arr) => arr.every((i) => playersData[i] === currentPlayer));
