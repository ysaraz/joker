"use strict";
var State;
(function (State) {
    State[State["end"] = 0] = "end";
    State[State["run"] = 1] = "run";
})(State = exports.State || (exports.State = {}));
var Queue = (function () {
    function Queue(call) {
        this.list = [];
        this.state = State.end;
        this.call = call;
    }
    Queue.prototype.add = function (data) {
        this.list.push(data);
        if (this.state === State.end) {
            this.run();
        }
    };
    Queue.prototype.run = function () {
        this.state = State.run;
        if (this.list.length === 0) {
            this.end();
            return;
        }
        else {
            var current = this.list.shift();
            this.call(current, this);
        }
    };
    Queue.prototype.next = function () {
        this.run();
    };
    Queue.prototype.end = function () {
        this.state = State.end;
    };
    return Queue;
}());
exports.Queue = Queue;
