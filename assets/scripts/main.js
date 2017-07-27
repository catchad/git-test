"use strict";

var a = 10;
var b = 20;

// var person = () => {
// 	// this.age = 1;

// 	// setTimeout(() => {
// 	// 	alert(this.age);
// 	// }, 1000);
// }

function Person() {
	var _this = this;

	this.age = 1;
	setTimeout(function () {
		_this.age += 1;
		console.log(_this.age);
	}, 1000);
}

var c = new Person();