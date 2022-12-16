"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.push = function (data) {
        this.storage.push(data);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
exports.Stack = Stack;
