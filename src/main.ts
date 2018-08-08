import Vue from 'vue';
import { BoardComponent } from './board.component';
import { store } from './store';

// Vue.config.keyCodes = {
//  number: [49, 50, 51, 52, 53, 54, 55, 56, 57]
// };

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

