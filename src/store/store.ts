import * as Vuex from 'vuex';
import { createGame, State } from './state';
import { Cell } from './core';
import { getters as rootGetters } from './getters';

export const storeObject: Vuex.StoreOptions<State> = {
  state: createGame([
    0, 8, 4, 0, 0, 2, 0, 3, 0,
    2, 0, 7, 8, 3, 1, 0, 0, 9,
    0, 1, 0, 5, 0, 0, 0, 2, 7,

    0, 7, 8, 0, 1, 0, 9, 0, 2,
    0, 0, 9, 7, 6, 0, 0, 8, 5,
    5, 0, 1, 9, 0, 0, 3, 0, 0,

    0, 3, 0, 1, 0, 7, 4, 0, 6,
    0, 0, 6, 2, 0, 0, 0, 0, 0,
    7, 0, 0, 3, 9, 0, 0, 0, 0
  ]),
  actions: {
    handleKeyDown({commit, getters}, e: KeyboardEvent) {
      console.log('handleKeyDown', e.metaKey);
      if (e.metaKey) return;
      e.preventDefault();
      console.log('e keycode', e.shiftKey)
      switch(e.keyCode) {
        case 9: // tab
          commit(e.shiftKey ? 'left' : 'right');
          break;
        case 37:
          commit('left');
          break;
        case 38:
          commit('up');
          break;
        case 39:
          commit('right');
          break;
        case 40:
          commit('down');
          break;
        case 49: // 1
        case 50: // 2
        case 51: // 3
        case 52: // 4
        case 53: // 5
        case 54: // 6
        case 55: // 7
        case 56: // 8
        case 57: // 9
          commit('setCellValue', {
            cell: getters.selectedCell,
            value: +e.key
          });
          break;
        case 8: // backspace
        case 46: // delete
          commit('setCellValue', {
            cell: getters.selectedCell,
            value: null
          });
      }
    }
  },
  getters: rootGetters,
  // getters: {
  //   selectedCell({ board: {cursor, cells} }): Cell {
  //     return cells.find(cell => cursor.is(cell))!;
  //   }
  // },
  mutations: {
    setCellValue(state, {cell, value}: {cell: Cell, value: number}) {
      if (cell.locked) return;
      cell.value = cell.value === value ? null : value;
    },
    setCursor: ({ board }, { row, col }) => board.cursor = board.cursor.set(row, col),
    left: ({ board }) => board.cursor = board.cursor.left(),
    right: ({ board }) => board.cursor = board.cursor.right(),
    up: ({ board }) => board.cursor = board.cursor.up(),
    down: ({ board }) => board.cursor = board.cursor.down()
  }
};