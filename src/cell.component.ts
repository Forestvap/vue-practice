/* tslint:disable */
import * as Vue from 'vue';
import { mapMutations, mapState } from 'vuex';

export const CellComponent: Vue.ComponentOptions<any> = {
  props: {
    row: { type: Number, required: true },
    col: { type: Number, required: true },
    nonet: { type: Number, required: true },
    locked: { type: Boolean, required: true },
    value: { type: Number }
  },

  computed: {
   ...mapState({
     selected(this: any, {cursor: {col, row}}) {
       return this.col === col && this.row === row;
     },
     rowSelected(this: any, {cursor: {row}}) {
       return this.row === row;
     },
     colSelected(this: any, {cursor: {col}}) {
       return this.col === col;
     },
     nonetSelected(this: any, {cursor: {nonet}}) {
       return this.nonet === nonet;
     }
    }),
    cellCssClasses() {
     return {
       'locked': this.locked,
       'row-selected': this.rowSelected,
       'col-selected': this.colSelected,
       'nonet-selected': this.nonetSelected,
       'selected': this.selected
     };
    },
    index() {
     // console.log('row', this.row)
     //  console.log('col', this.col)
     //  console.log('index', this.row * 9 + this.col)
      return (this.row * 9) + this.col;
    }
  },
  methods: {
   ...mapMutations([ 'setCursor' ]),
    onCellClick() {
     // this.$el.focus();
     console.log(window['el'] = this.$el);
     this.$store.commit({
       type: 'setCursor',
       row: this.row,
       col: this.col
     });
    }
  },
  template: `
    <div
      :id="'cell-'+index"
      :class="cellCssClasses"
      @click="onCellClick"
      class="sudoku-cell">
      <span class="sudoku-cell__value">{{value}}</span>
    </div>
  `
};
