var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import Component from 'vue-class-component';
import SquareComponent from './square.component';
var BoardComponent = /** @class */ (function (_super) {
    __extends(BoardComponent, _super);
    function BoardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.board = [
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        return _this;
    }
    BoardComponent.prototype.rowSubBlockToBlock = function (row, subBlock) {
        console.log('row', row, subBlock);
        return (row - row % 3) + subBlock;
    };
    BoardComponent.prototype.chunkify = function (size, list) {
        return list.length > 0
            ? [list.slice(0, size)].concat(this.chunkify(size, list.slice(size))) : [list];
    };
    BoardComponent = __decorate([
        Component({
            template: "\n    <form class=\"row\">\n      <div v-for=\"(row, rowIndex) in chunkify(9, board)\" class=\"row\">\n        <div v-for=\"(block, subBlockIndex) in chunkify(3, row)\" class=\"col s4\">\n          <div v-for=\"(square, squareIndex) in block\">\n            <square\n              :row=\"rowIndex\"\n              :col=\"(3 * subBlockIndex) + squareIndex\"\n              :block=\"rowSubBlockToBlock(rowIndex, subBlockIndex)\"\n              >\n            </square>\n          </div>\n        </div>\n      </div>\n    </form>\n  ",
            components: {
                square: SquareComponent
            }
        })
    ], BoardComponent);
    return BoardComponent;
}(Vue));
export default BoardComponent;
