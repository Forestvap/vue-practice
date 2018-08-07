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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Vue from 'vue';
import Component from 'vue-class-component';
var Square = /** @class */ (function () {
    function Square(row, col, val) {
        this.row = row;
        this.col = col;
        this.val = val;
        this.index = (9 * this.row) + col;
    }
    return Square;
}());
export { Square };
var SquareComponent = /** @class */ (function (_super) {
    __extends(SquareComponent, _super);
    function SquareComponent() {
        return _super.call(this) || this;
    }
    SquareComponent = __decorate([
        Component({
            props: {
                row: {
                    type: Number,
                    required: true
                },
                col: {
                    type: Number,
                    required: true
                },
                block: {
                    type: Number,
                    required: true
                }
            },
            template: "\n    <div class=\"input-field col s4\">\n      <input id=\"\" type=\"text\">\n      <label for=\"first_name\">R {{row}}, C {{col}}, B {{block}}</label>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SquareComponent);
    return SquareComponent;
}(Vue));
export default SquareComponent;
