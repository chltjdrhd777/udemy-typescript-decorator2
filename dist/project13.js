"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function fac1(store) {
    return function (connected) {
        const stored = [];
        stored.push(store);
        console.log(stored);
        console.log(connected);
    };
}
let defaultC = class defaultC {
};
defaultC = __decorate([
    fac1("have to be string")
], defaultC);
function fac2(template, hookId) {
    return function (_) {
        const hooking = document.getElementById(hookId);
        if (hooking) {
            hooking.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Anderson";
        console.log("Creating person object");
    }
};
Person = __decorate([
    fac2("<h1>Does it work?</h1>", "app")
], Person);
//# sourceMappingURL=project13.js.map