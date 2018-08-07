import Vue from 'vue';
import BoardComponent from "./board.component";
var app = new Vue({
    el: '#app',
    components: {
        board: BoardComponent
    },
    template: "\n    <board></board>\n  "
});
Object.defineProperty(window, 'app', {
    value: app
});
