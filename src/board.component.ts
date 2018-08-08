import * as Vue from 'vue';
import { CellComponent } from './cell.component';

export const BoardComponent: Vue.ComponentOptions<any> = {
  components: {
    cell: CellComponent
  },

  data() {
    return {
      board: [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,

        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,

        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    };
  },

  template: `
    <div class="container">
      <div v-for="(row, rowIndex) in chunkify(9, board)" class="row my-0 py-0">
        <div v-for="(block, subBlockIndex) in chunkify(3, row)" class="col s4">
          <div v-for="(cell, squareIndex) in block">
            <cell
              :row="rowIndex"
              :col="(3 * subBlockIndex) + squareIndex"
              :nonet="(rowIndex - rowIndex % 3) + subBlockIndex">
            </cell>
          </div>
        </div>
      </div>
    </div>
  `,

  methods: {
    chunkify<T>(size: number, list: T[]): T[][] {
      return list.length > 0
        ? [list.slice(0, size), ...this.chunkify(size, list.slice(size))]
        : [list];
    }
  }
};