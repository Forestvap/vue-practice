import Vue from 'vue';
import { BoardComponent } from './board.component';
import { store } from './store';

const app = new Vue({
  el: '#app',
  filters: {
    join<T>(list: T[], separator = ' '): string {
      if (!Array.isArray(list)) {
        throw new Error(`The "join" filter expects data to be an Array!`);
      }
      return list.join(separator);
    }
  },
  store,
  components: {
    board: BoardComponent
  },
  mounted() {
    this.$el.parentElement!.addEventListener(
      'keydown',
      this.$store.dispatch.bind(this, 'handleKeyDown')
    );
  },
  template: `
    <board></board>
  `
});

Object.defineProperty(window, 'app', {
  value: app
});

