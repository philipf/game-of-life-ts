/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }
    return Cell;
}());



/***/ }),

/***/ "./src/CellFactory.ts":
/*!****************************!*\
  !*** ./src/CellFactory.ts ***!
  \****************************/
/*! exports provided: CellFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellFactory", function() { return CellFactory; });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./src/Cell.ts");

var CellFactory = /** @class */ (function () {
    function CellFactory() {
    }
    CellFactory.create = function (values, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        values = values.trim();
        var result = new Array();
        var lines = values.split(/\r?\n/);
        var y = 0;
        lines.forEach(function (l) {
            var tcells = l.trim().split(",");
            var x = 0;
            tcells.forEach(function (tc) {
                if (tc.toLowerCase() == "x") {
                    result.push(new _Cell__WEBPACK_IMPORTED_MODULE_0__["Cell"](offsetX + x, offsetY + y, true));
                }
                x++;
            });
            y++;
        });
        return result;
    };
    return CellFactory;
}());



/***/ }),

/***/ "./src/GameService.ts":
/*!****************************!*\
  !*** ./src/GameService.ts ***!
  \****************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _getOutcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOutcome */ "./src/getOutcome.ts");
/* harmony import */ var _GridReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridReader */ "./src/GridReader.ts");
/* harmony import */ var _GridModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridModel */ "./src/GridModel.ts");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cell */ "./src/Cell.ts");




var GameService = /** @class */ (function () {
    function GameService(height, width) {
        this.currentState = new _GridModel__WEBPACK_IMPORTED_MODULE_2__["GridModel"](height, width);
        this.gridReader = new _GridReader__WEBPACK_IMPORTED_MODULE_1__["GridReader"](this.currentState);
    }
    // TODO Optimise, only read active map
    GameService.prototype.tick = function () {
        var changes = new Array();
        for (var y = 0; y < this.currentState.height; y++) {
            for (var x = 0; x < this.currentState.width; x++) {
                var neighbours = this.gridReader.getNeighbours(x, y);
                var currentState = neighbours.myState;
                var newState = Object(_getOutcome__WEBPACK_IMPORTED_MODULE_0__["getOutcome"])(neighbours);
                if (currentState != newState) {
                    changes.push(new _Cell__WEBPACK_IMPORTED_MODULE_3__["Cell"](x, y, newState));
                }
            }
        }
        this.applyChanges(changes);
        return changes;
    };
    GameService.prototype.applyChanges = function (changes) {
        var _this = this;
        changes.forEach(function (c) {
            _this.currentState.setValue(c.x, c.y, c.state);
        });
    };
    return GameService;
}());



/***/ }),

/***/ "./src/GridModel.ts":
/*!**************************!*\
  !*** ./src/GridModel.ts ***!
  \**************************/
/*! exports provided: GridModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModel", function() { return GridModel; });
var GridModel = /** @class */ (function () {
    function GridModel(height, width) {
        this.height = height;
        this.width = width;
        this.state = [];
    }
    GridModel.prototype.setValue = function (x, y, value) {
        if (x >= this.width || y >= this.height)
            throw "Outside of grid boundary. Grid size[" + this.width + "," + this.height + "] but trying to set [" + x + "," + y + "]";
        // JIT initialisation
        if (!this.state[x])
            this.state[x] = [];
        this.state[x][y] = value;
    };
    GridModel.prototype.getValue = function (x, y) {
        // Guard conditions here
        // If not yet initialised it is acceptable to return false, 
        // thereby not having to intialise the whole grid to false values
        // when intialised.
        if (!this.state || !this.state[x])
            return false;
        var result = this.state[x][y];
        // Same, if not initialised then default to false.
        if (!result)
            return false;
        return result;
    };
    return GridModel;
}());



/***/ }),

/***/ "./src/GridReader.ts":
/*!***************************!*\
  !*** ./src/GridReader.ts ***!
  \***************************/
/*! exports provided: GridReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridReader", function() { return GridReader; });
var GridReader = /** @class */ (function () {
    function GridReader(gridModel) {
        this.gridModel = gridModel;
    }
    GridReader.prototype.getNeighbours = function (x, y) {
        var n = {
            count: 0,
            states: [],
            myState: this.read(x, y)
        };
        var arrayIdx = 0;
        for (var yn = -1; yn < 2; yn++) {
            for (var xn = -1; xn < 2; xn++) {
                // Apply neighbour offsets
                var xr = x + xn;
                var yr = y + yn;
                var value = this.read(xr, yr);
                n.states[arrayIdx] = value;
                var isCurrentCell = (x === xr && y === yr);
                if (!isCurrentCell && value) {
                    n.count++;
                }
                // Optimisation, rules only go up 3
                if (n.count > 3)
                    return n;
                arrayIdx++;
            }
        }
        return n;
    };
    GridReader.prototype.read = function (x, y) {
        // TODO: add read strategy
        if (x < 0 || x >= this.gridModel.width)
            return false;
        if (y < 0 || y >= this.gridModel.height)
            return false;
        return this.gridModel.getValue(x, y);
    };
    return GridReader;
}());



/***/ }),

/***/ "./src/getOutcome.ts":
/*!***************************!*\
  !*** ./src/getOutcome.ts ***!
  \***************************/
/*! exports provided: getOutcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutcome", function() { return getOutcome; });
function getOutcome(neighbours) {
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    var isActive = neighbours.myState;
    var count = neighbours.count;
    // Any live cell with two or three live neighbours survives.
    if (isActive && (count == 2 || count == 3)) {
        return true;
    }
    // Any dead cell with three live neighbours becomes a live cell.
    if (!isActive && count == 3) {
        return true;
    }
    // All other live cells die in the next generation. 
    // Similarly, all other dead cells stay dead.
    return false;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameService */ "./src/GameService.ts");
/* harmony import */ var _CellFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellFactory */ "./src/CellFactory.ts");


var cellHeight = 10;
var cellWidth = cellHeight;
var cellBorder = 1;
function drawChanges(ctx, changes) {
    changes.forEach(function (c) {
        var xPos = c.x * cellWidth + (c.x * cellBorder);
        var yPos = c.y * cellWidth + (c.y * cellBorder);
        if (c.state) {
            ctx.fillRect(xPos, yPos, cellWidth, cellHeight);
        }
        else {
            ctx.clearRect(xPos, yPos, cellWidth, cellHeight);
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var service = new _GameService__WEBPACK_IMPORTED_MODULE_0__["GameService"](50, 100);
    var values = "\n    ,,,,,,,X,X,X,X,X,X,,,,,,,,,X,X,X,X,X,X,X,,,,,,,,,,,,,,X,X,X,X,X,X,,,\n    ,,,,,,X,,,,,,X,,,,,,,X,X,,,,,,,,X,X,,,,,,,,,,,X,,,,,,X,,,\n    ,,,,,X,,,,,,,X,,,,,X,X,,,,,,,,,,,,X,X,,,,,,,,X,,,,,,,X,,,\n    ,,,,X,,,,X,X,,,X,,,,X,,,,,,,X,X,X,,,,,,,X,,,,,,X,,,,X,X,,,X,,,\n    ,,,X,,,,X,,X,,,X,,,,X,,,,,,X,,,,X,,,,,,X,,,,,X,,,,X,,X,,,X,,,\n    ,,X,,,,X,,,X,,,X,,,,X,,,,,X,,,,,,X,,,,,X,,,,X,,,,X,,,X,,,X,,,\n    ,X,,,,X,,,,X,,,X,,,,X,,,,,X,,,,,,X,,,,,X,,,X,,,,X,,,,X,,,X,,,\n    X,,,,X,X,X,X,X,X,,,X,X,X,,X,,,,,X,,,,,,X,,,,,X,,X,,,,X,X,X,X,X,X,,,X,X,X,\n    X,,,,,,,,,,,,,,X,,X,,,,,X,,,,,,X,,,,,X,,X,,,,,,,,,,,,,,X,\n    X,,,,,,,,,,,,,,x,,X,,,,,X,,,,,,X,,,,,X,,X,,,,,,,,,,,,,,x,\n    X,X,X,X,X,X,X,X,X,,,,X,X,X,,X,,,,,X,,,,,,X,,,,,X,,X,X,X,X,X,X,X,X,X,,,,X,X,X,\n    ,,,,,,,,X,,,,X,,,,X,,,,,X,,,,,,X,,,,,X,,,,,,,,,,X,,,,X,,,\n    ,,,,,,,,X,,,,X,,,,X,,,,,,X,,,,X,,,,,,X,,,,,,,,,,X,,,,X,,,\n    ,,,,,,,,X,,,,X,,,,X,,,,,,,X,X,X,,,,,,,X,,,,,,,,,,X,,,,X,,,\n    ,,,,,,,X,X,,,,X,X,,,,X,X,,,,,,,,,,,,X,X,,,,,,,,,,X,X,,,,X,X,,\n    ,,,,,,,X,,,,,,X,,,,,,X,X,,,,,,,,X,X,,,,,,,,,,,,X,,,,,,X,,\n    ,,,,,,,X,X,X,X,X,X,X,,,,,,,,X,X,X,X,X,X,X,,,,,,,,,,,,,,X,X,X,X,X,X,X,,\n    \n    ";
    var changes = _CellFactory__WEBPACK_IMPORTED_MODULE_1__["CellFactory"].create(values, 13, 12);
    service.applyChanges(changes);
    var canvas = document.getElementById('grid');
    if (!canvas)
        console.log("oops no canvas ");
    var ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.fillStyle = "#515151";
        var c_1 = ctx;
        drawChanges(c_1, changes);
        setTimeout(function () {
            setInterval(function () {
                changes = service.tick();
                drawChanges(c_1, changes);
            }, 200);
        }, 5000);
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NlbGxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR3JpZE1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9HcmlkUmVhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nZXRPdXRjb21lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtJQUNJLGNBQW1CLENBQVMsRUFBUyxDQUFTLEVBQVMsS0FBYztRQUFsRCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLFVB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aUIsQ0FBQyxDQUFDO0lBRW5DLElBQUksR0FBRyxHQUFxQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBFLElBQUksR0FBRyxFQUFFO1FBQ0wsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxHQUFDLEdBQTZCLEdBQUcsQ0FBQztRQUN0QyxXQUFXLENBQUMsR0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhCLFVBQVUsQ0FBQztZQUNQLFdBQVcsQ0FBQztnQkFDUixPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixXQUFXLENBQUMsR0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNiO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcbmV4cG9ydCBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyLCBwdWJsaWMgc3RhdGU6IGJvb2xlYW4pIHsgfVxufVxuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcblxuZXhwb3J0IGNsYXNzIENlbGxGYWN0b3J5IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHZhbHVlczogc3RyaW5nLFxuICAgICAgICBvZmZzZXRYOiBudW1iZXIgPSAwLCBcbiAgICAgICAgb2Zmc2V0WTogbnVtYmVyID0gMCk6IENlbGxbXSB7XG5cbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLnRyaW0oKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PENlbGw+KCk7XG5cbiAgICAgICAgbGV0IGxpbmVzID0gdmFsdWVzLnNwbGl0KC9cXHI/XFxuLyk7XG5cbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBsaW5lcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgICAgICAgbGV0IHRjZWxscyA9IGwudHJpbSgpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgICAgIHRjZWxscy5mb3JFYWNoKHRjID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGMudG9Mb3dlckNhc2UoKSA9PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgQ2VsbChvZmZzZXRYICsgeCwgb2Zmc2V0WSArIHksIHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0T3V0Y29tZSB9IGZyb20gJy4vZ2V0T3V0Y29tZSc7XG5pbXBvcnQgeyBHcmlkUmVhZGVyIH0gZnJvbSAnLi9HcmlkUmVhZGVyJztcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuL0dyaWRNb2RlbFwiO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2VydmljZVxue1xuICAgIGN1cnJlbnRTdGF0ZTogR3JpZE1vZGVsO1xuICAgIGdyaWRSZWFkZXI6IEdyaWRSZWFkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ldyBHcmlkTW9kZWwoaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMuZ3JpZFJlYWRlciAgID0gbmV3IEdyaWRSZWFkZXIodGhpcy5jdXJyZW50U3RhdGUpO1xuICAgIH1cblxuICAgIC8vIFRPRE8gT3B0aW1pc2UsIG9ubHkgcmVhZCBhY3RpdmUgbWFwXG4gICAgcHVibGljIHRpY2soKSA6IEFycmF5PENlbGw+IHtcbiAgICAgICAgbGV0IGNoYW5nZXMgPSBuZXcgQXJyYXk8Q2VsbD4oKTtcbiAgICBcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuY3VycmVudFN0YXRlLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy5jdXJyZW50U3RhdGUud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCBuZWlnaGJvdXJzID0gdGhpcy5ncmlkUmVhZGVyLmdldE5laWdoYm91cnMoeCwgeSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlOiBib29sZWFuID0gbmVpZ2hib3Vycy5teVN0YXRlO1xuICAgICAgICAgICAgICAgIGxldCBuZXdTdGF0ZTogYm9vbGVhbiA9IGdldE91dGNvbWUobmVpZ2hib3Vycyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICE9IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaChuZXcgQ2VsbCh4LCB5LCBuZXdTdGF0ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhcHBseUNoYW5nZXMoY2hhbmdlczogQXJyYXk8Q2VsbD4pIHtcbiAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUuc2V0VmFsdWUoYy54LCBjLnksIGMuc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEdyaWRNb2RlbFxue1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcblxuICAgIHB1YmxpYyBzdGF0ZTpib29sZWFuIFtdW107XG5cbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCAgPSB3aWR0aDtcblxuICAgICAgICB0aGlzLnN0YXRlID0gW107XG4gICAgfVxuXG4gICAgc2V0VmFsdWUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBib29sZWFuKSB7XG5cbiAgICAgICAgaWYgKHggPj0gdGhpcy53aWR0aCB8fCB5ID49IHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgdGhyb3cgYE91dHNpZGUgb2YgZ3JpZCBib3VuZGFyeS4gR3JpZCBzaXplWyR7dGhpcy53aWR0aH0sJHt0aGlzLmhlaWdodH1dIGJ1dCB0cnlpbmcgdG8gc2V0IFske3h9LCR7eX1dYDtcblxuICAgICAgICAvLyBKSVQgaW5pdGlhbGlzYXRpb25cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlW3hdKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZVt4XSA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3RhdGVbeF1beV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZSh4OiBudW1iZXIsIHk6IG51bWJlcikgOiBib29sZWFuIHtcbiAgICAgICAgLy8gR3VhcmQgY29uZGl0aW9ucyBoZXJlXG5cbiAgICAgICAgLy8gSWYgbm90IHlldCBpbml0aWFsaXNlZCBpdCBpcyBhY2NlcHRhYmxlIHRvIHJldHVybiBmYWxzZSwgXG4gICAgICAgIC8vIHRoZXJlYnkgbm90IGhhdmluZyB0byBpbnRpYWxpc2UgdGhlIHdob2xlIGdyaWQgdG8gZmFsc2UgdmFsdWVzXG4gICAgICAgIC8vIHdoZW4gaW50aWFsaXNlZC5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlIHx8ICF0aGlzLnN0YXRlW3hdKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RhdGVbeF1beV07XG5cbiAgICAgICAgLy8gU2FtZSwgaWYgbm90IGluaXRpYWxpc2VkIHRoZW4gZGVmYXVsdCB0byBmYWxzZS5cbiAgICAgICAgaWYgKCFyZXN1bHQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4vR3JpZE1vZGVsXCI7XG5pbXBvcnQgeyBOZWlnaGJvdXJzIH0gZnJvbSBcIi4vTmVpZ2hib3Vyc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JpZFJlYWRlclxue1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZE1vZGVsOiBHcmlkTW9kZWwpIHt9XG5cbiAgICBnZXROZWlnaGJvdXJzKHg6IG51bWJlciwgeTogbnVtYmVyKSA6IE5laWdoYm91cnMge1xuICAgICAgICBsZXQgbiA6IE5laWdoYm91cnMgPSB7IFxuICAgICAgICAgICAgY291bnQ6IDAsIFxuICAgICAgICAgICAgc3RhdGVzOiBbXSwgXG4gICAgICAgICAgICBteVN0YXRlOiB0aGlzLnJlYWQoeCwgeSlcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYXJyYXlJZHggPSAwO1xuICAgICAgICBmb3IgKGxldCB5biA9IC0xOyB5biA8IDI7IHluKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHhuID0gLTE7IHhuIDwgMjsgeG4rKykge1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgbmVpZ2hib3VyIG9mZnNldHNcbiAgICAgICAgICAgICAgICBjb25zdCB4ciA9IHggKyB4bjtcbiAgICAgICAgICAgICAgICBjb25zdCB5ciA9IHkgKyB5bjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBib29sZWFuID0gdGhpcy5yZWFkKHhyLCB5cik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbi5zdGF0ZXNbYXJyYXlJZHhdID0gdmFsdWVcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudENlbGwgPSAoeCA9PT0geHIgJiYgeSA9PT0geXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0N1cnJlbnRDZWxsICYmIHZhbHVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbi5jb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9wdGltaXNhdGlvbiwgcnVsZXMgb25seSBnbyB1cCAzXG4gICAgICAgICAgICAgICAgaWYgKG4uY291bnQgPiAzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcblxuICAgICAgICAgICAgICAgIGFycmF5SWR4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG5cbiAgICByZWFkKHg6IG51bWJlciwgeTogbnVtYmVyKSA6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOiBhZGQgcmVhZCBzdHJhdGVneVxuXG4gICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHRoaXMuZ3JpZE1vZGVsLndpZHRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICh5IDwgMCB8fCB5ID49IHRoaXMuZ3JpZE1vZGVsLmhlaWdodClcbiAgICAgICAgICAgIHJldHVybiAgZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZE1vZGVsLmdldFZhbHVlKHggLHkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZWlnaGJvdXJzIH0gZnJvbSBcIi4vTmVpZ2hib3Vyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0Y29tZShuZWlnaGJvdXJzOiBOZWlnaGJvdXJzKSA6IGJvb2xlYW4ge1xuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbndheSUyN3NfR2FtZV9vZl9MaWZlXG4gICAgXG4gICAgY29uc3QgaXNBY3RpdmUgPSBuZWlnaGJvdXJzLm15U3RhdGU7XG4gICAgY29uc3QgY291bnQgPSBuZWlnaGJvdXJzLmNvdW50O1xuICAgIC8vIEFueSBsaXZlIGNlbGwgd2l0aCB0d28gb3IgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIHN1cnZpdmVzLlxuICAgIGlmIChpc0FjdGl2ZSAmJiAoY291bnQgPT0gMiB8fCBjb3VudCA9PSAzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBbnkgZGVhZCBjZWxsIHdpdGggdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBsaXZlIGNlbGwuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBjb3VudCA9PSAzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFsbCBvdGhlciBsaXZlIGNlbGxzIGRpZSBpbiB0aGUgbmV4dCBnZW5lcmF0aW9uLiBcbiAgICAvLyBTaW1pbGFybHksIGFsbCBvdGhlciBkZWFkIGNlbGxzIHN0YXkgZGVhZC5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgR2FtZVNlcnZpY2UgfSBmcm9tIFwiLi9HYW1lU2VydmljZVwiO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCB7IENlbGxGYWN0b3J5IH0gZnJvbSBcIi4vQ2VsbEZhY3RvcnlcIjtcblxuY29uc3QgY2VsbEhlaWdodCA9IDEwO1xuY29uc3QgY2VsbFdpZHRoID0gY2VsbEhlaWdodDtcbmNvbnN0IGNlbGxCb3JkZXIgPSAxO1xuXG5mdW5jdGlvbiBkcmF3Q2hhbmdlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgXG4gICAgY2hhbmdlczogQXJyYXk8Q2VsbD4pIHtcblxuICAgIGNoYW5nZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgbGV0IHhQb3MgPSBjLnggKiBjZWxsV2lkdGggKyAoYy54ICogY2VsbEJvcmRlcik7XG4gICAgICAgIGxldCB5UG9zID0gYy55ICogY2VsbFdpZHRoICsgKGMueSAqIGNlbGxCb3JkZXIpO1xuXG4gICAgICAgIGlmIChjLnN0YXRlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoeFBvcywgeVBvcywgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoeFBvcywgeVBvcywgY2VsbFdpZHRoLCBjZWxsSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgR2FtZVNlcnZpY2UoNTAsMTAwKVxuXG4gICAgY29uc3QgdmFsdWVzID0gYFxuICAgICwsLCwsLCxYLFgsWCxYLFgsWCwsLCwsLCwsLFgsWCxYLFgsWCxYLFgsLCwsLCwsLCwsLCwsLFgsWCxYLFgsWCxYLCwsXG4gICAgLCwsLCwsWCwsLCwsLFgsLCwsLCwsWCxYLCwsLCwsLCxYLFgsLCwsLCwsLCwsLFgsLCwsLCxYLCwsXG4gICAgLCwsLCxYLCwsLCwsLFgsLCwsLFgsWCwsLCwsLCwsLCwsLFgsWCwsLCwsLCwsWCwsLCwsLCxYLCwsXG4gICAgLCwsLFgsLCwsWCxYLCwsWCwsLCxYLCwsLCwsLFgsWCxYLCwsLCwsLFgsLCwsLCxYLCwsLFgsWCwsLFgsLCxcbiAgICAsLCxYLCwsLFgsLFgsLCxYLCwsLFgsLCwsLCxYLCwsLFgsLCwsLCxYLCwsLCxYLCwsLFgsLFgsLCxYLCwsXG4gICAgLCxYLCwsLFgsLCxYLCwsWCwsLCxYLCwsLCxYLCwsLCwsWCwsLCwsWCwsLCxYLCwsLFgsLCxYLCwsWCwsLFxuICAgICxYLCwsLFgsLCwsWCwsLFgsLCwsWCwsLCwsWCwsLCwsLFgsLCwsLFgsLCxYLCwsLFgsLCwsWCwsLFgsLCxcbiAgICBYLCwsLFgsWCxYLFgsWCxYLCwsWCxYLFgsLFgsLCwsLFgsLCwsLCxYLCwsLCxYLCxYLCwsLFgsWCxYLFgsWCxYLCwsWCxYLFgsXG4gICAgWCwsLCwsLCwsLCwsLCwsWCwsWCwsLCwsWCwsLCwsLFgsLCwsLFgsLFgsLCwsLCwsLCwsLCwsLFgsXG4gICAgWCwsLCwsLCwsLCwsLCwseCwsWCwsLCwsWCwsLCwsLFgsLCwsLFgsLFgsLCwsLCwsLCwsLCwsLHgsXG4gICAgWCxYLFgsWCxYLFgsWCxYLFgsLCwsWCxYLFgsLFgsLCwsLFgsLCwsLCxYLCwsLCxYLCxYLFgsWCxYLFgsWCxYLFgsWCwsLCxYLFgsWCxcbiAgICAsLCwsLCwsLFgsLCwsWCwsLCxYLCwsLCxYLCwsLCwsWCwsLCwsWCwsLCwsLCwsLCxYLCwsLFgsLCxcbiAgICAsLCwsLCwsLFgsLCwsWCwsLCxYLCwsLCwsWCwsLCxYLCwsLCwsWCwsLCwsLCwsLCxYLCwsLFgsLCxcbiAgICAsLCwsLCwsLFgsLCwsWCwsLCxYLCwsLCwsLFgsWCxYLCwsLCwsLFgsLCwsLCwsLCwsWCwsLCxYLCwsXG4gICAgLCwsLCwsLFgsWCwsLCxYLFgsLCwsWCxYLCwsLCwsLCwsLCwsWCxYLCwsLCwsLCwsLFgsWCwsLCxYLFgsLFxuICAgICwsLCwsLCxYLCwsLCwsWCwsLCwsLFgsWCwsLCwsLCwsWCxYLCwsLCwsLCwsLCwsWCwsLCwsLFgsLFxuICAgICwsLCwsLCxYLFgsWCxYLFgsWCxYLCwsLCwsLCxYLFgsWCxYLFgsWCxYLCwsLCwsLCwsLCwsLCxYLFgsWCxYLFgsWCxYLCxcbiAgICBcbiAgICBgO1xuXG4gICAgbGV0IGNoYW5nZXMgPSBDZWxsRmFjdG9yeS5jcmVhdGUodmFsdWVzLCAxMywgMTIpO1xuXG4gICAgc2VydmljZS5hcHBseUNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBsZXQgY2FudmFzICA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQnKTtcblxuICAgIGlmICghY2FudmFzKVxuICAgICAgICBjb25zb2xlLmxvZyhcIm9vcHMgbm8gY2FudmFzIFwiKTtcblxuICAgIGxldCBjdHggOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBpZiAoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiM1MTUxNTFcIjtcbiAgICAgICAgbGV0IGM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGN0eDtcbiAgICAgICAgZHJhd0NoYW5nZXMoYywgY2hhbmdlcyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlcyA9IHNlcnZpY2UudGljaygpO1xuICAgICAgICAgICAgICAgIGRyYXdDaGFuZ2VzKGMsIGNoYW5nZXMpO1xuICAgICAgICAgICAgfSwgMjAwKTsgICAgICAgICAgICBcbiAgICAgICAgfSwgNTAwMCk7XG4gICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=