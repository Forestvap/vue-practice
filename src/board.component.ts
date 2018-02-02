import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: `
        <form class="row">
            <div v-for="(row, rowIndex) in chunkify(9, board)" class="row">
                <div v-for="(block, subBlockIndex) in chunkify(3, row)" class="col s4">
                    <div></div>
                </div>
            </div>
        </form>
    `
})

export default class BoardComponent extends Vue {

    board = [
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,

        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,

        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0,
        0, 0, 0,  0, 0, 0,  0, 0, 0
    ];

    rowSubBlockToBlock(row: number, subBlock: number): number {
        return (row - row%3)/3 + subBlock;
    }

    chunkify<T>(size: number, list: T[]): T[][] {
        return list.length > 0
        ? [ list.slice(0, size), ...this.chunkify(size, list.slice(size))]
        : [ list ];
    }

}
