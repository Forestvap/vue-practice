import Vue from 'vue';
import BoardComponent from './board.component';
import { store } from './store';

const app = new Vue({
  el: '#app',
  store,
  components: {
    board: BoardComponent
  },
  template: `
    <board></board>
  `
});

Object.defineProperty(window, 'app', {
  value: app
});

