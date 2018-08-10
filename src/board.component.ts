import Vue, { ComponentOptions } from 'vue';
import { CellComponent } from './cell.component';
import { mapGetters, mapState } from 'vuex';

interface BoardComponent extends Vue {
  onKeydown(e: KeyboardEvent): void;
  chunkify<T>(size: number, list: T[]): T[][];
}

export const BoardComponent: ComponentOptions<BoardComponent> = {
  components: {
    cell: CellComponent
  },

  template: `
    <div class="container board">
    <pre>{{cursor}}</pre>
    <pre>{{selectedCell}}</pre>
      <div v-for="(row, rowIndex) in chunkify(9, board)" class="row my-0 py-0">
        <div v-for="(block, subBlockIndex) in chunkify(3, row)" class="col s4 px-0">
          <div class="col s4 cell-wrapper" v-for="(cell, squareIndex) in block">
            <cell :cell="cell" v-bind="cell" />
          </div>
        </div>
      </div>
    </div>
  `,

  computed: {
    ...mapState({
      board: (state: any) => state.board.cells,
      cursor: (state: any) => state.board.cursor
    }),
    ...mapGetters(['selectedCell'])
  },
  mounted() {
    console.log('this element', this.$el.parentElement!);
    this.$el.parentElement!.addEventListener(
      'keydown',
      this.$store.dispatch.bind(this, 'handleKeyDown')
    );
  },

  methods: {
    chunkify<T>(this: BoardComponent, size: number, list: T[]): T[][] {
      return list.length > 0
        ? [list.slice(0, size), ...this.chunkify(size, list.slice(size))]
        : [list];
    }
  }
};