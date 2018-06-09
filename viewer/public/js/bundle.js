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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/skyway-js/dist/skyway.js":
/*!***********************************************!*\
  !*** ./node_modules/skyway-js/dist/skyway.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\n/* harmony import */ var _skywayHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skywayHelper */ \"./src/js/skywayHelper.js\");\n/* harmony import */ var _viewController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewController */ \"./src/js/viewController.js\");\n\n\n\n\n\n\nconst skywayOptions = {\n    APIKEY: 'f9dbc8e7-502b-49e8-a244-a6f34e65f6a3',\n    mode: 'sfu',\n    roomName: 'abc'\n};\n\nconst skyway = new _skywayHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](skywayOptions);\nconst view = new _viewController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nview.initView();\n\nskyway.joinMediaRoom().then(result => {\n    if (result.type === 'stream') {\n        _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playMediaStream(document.getElementById('remote'), result.value);\n        view.setInfomation1('<i class=\"fas fa-play-circle\"></i> SkyWayで配信中');\n        _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].countViewers(skyway.getSkyWayInstance()).then(result => {\n            view.setInfomation2('視聴者: ' + result + '人');\n        });\n    }\n}).then(() => {\n    setInterval(() => {\n        _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].countViewers(skyway.getSkyWayInstance()).then(result => {\n            view.setInfomation2('視聴者: ' + result + '人');\n        });\n    }, 2000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2luZGV4LmpzPzAyN2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xuaW1wb3J0IHNreXdheUhlbHBlciBmcm9tICcuL3NreXdheUhlbHBlcic7XG5pbXBvcnQgdmlld0NvbnRyb2xsZXIgZnJvbSAnLi92aWV3Q29udHJvbGxlcic7XG5cbmNvbnN0IHNreXdheU9wdGlvbnMgPSB7XG4gICAgQVBJS0VZOiAnZjlkYmM4ZTctNTAyYi00OWU4LWEyNDQtYTZmMzRlNjVmNmEzJyxcbiAgICBtb2RlOiAnc2Z1JyxcbiAgICByb29tTmFtZTogJ2FiYydcbn1cblxuY29uc3Qgc2t5d2F5ID0gbmV3IHNreXdheUhlbHBlcihza3l3YXlPcHRpb25zKTtcbmNvbnN0IHZpZXcgPSBuZXcgdmlld0NvbnRyb2xsZXIoKTtcbnZpZXcuaW5pdFZpZXcoKTtcblxuc2t5d2F5LmpvaW5NZWRpYVJvb20oKS50aGVuKHJlc3VsdCA9PntcbiAgICBpZihyZXN1bHQudHlwZSA9PT0gJ3N0cmVhbScpe1xuICAgICAgICB1dGlsaXR5LnBsYXlNZWRpYVN0cmVhbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3RlJykscmVzdWx0LnZhbHVlKTtcbiAgICAgICAgdmlldy5zZXRJbmZvbWF0aW9uMSgnPGkgY2xhc3M9XCJmYXMgZmEtcGxheS1jaXJjbGVcIj48L2k+IFNreVdheeOBp+mFjeS/oeS4rScpO1xuICAgICAgICB1dGlsaXR5LmNvdW50Vmlld2Vycyhza3l3YXkuZ2V0U2t5V2F5SW5zdGFuY2UoKSkudGhlbihyZXN1bHQgPT57XG4gICAgICAgICAgICB2aWV3LnNldEluZm9tYXRpb24yKCfoppbogbTogIU6ICcgKyByZXN1bHQgKyAn5Lq6Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pLnRoZW4oKCkgPT57XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB1dGlsaXR5LmNvdW50Vmlld2Vycyhza3l3YXkuZ2V0U2t5V2F5SW5zdGFuY2UoKSkudGhlbihyZXN1bHQgPT57XG4gICAgICAgICAgICB2aWV3LnNldEluZm9tYXRpb24yKCfoppbogbTogIU6ICcgKyByZXN1bHQgKyAn5Lq6Jyk7XG4gICAgICAgIH0pO1xuICAgIH0sMjAwMCk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/skywayHelper.js":
/*!********************************!*\
  !*** ./src/js/skywayHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var skyway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skyway-js */ \"./node_modules/skyway-js/dist/skyway.js\");\n/* harmony import */ var skyway_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyway_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nclass skywayHelper {\n\n    constructor(param) {\n        this.localAudioStream = null;\n        this.skywayInstance = null;\n        this.mediaRoomInstance = null;\n        this.peerId = null;\n        this.roomName = param.roomName;\n\n        delete param.roomName;\n        this.options = param;\n    }\n\n    joinMediaRoom() {\n        const self = this;\n        return new Promise(async (resolve, reject) => {\n            this.skywayInstance = new skyway_js__WEBPACK_IMPORTED_MODULE_0___default.a({ key: this.options.APIKEY, debug: 3 });\n            self.skywayInstance.on('open', peerId => {\n                self.peerId = peerId;\n                self.mediaRoomInstance = self.skywayInstance.joinRoom(self.roomName, { mode: self.options.mode });\n                self.mediaRoomInstance.on('open', async () => {\n                    await self._sfuWorkAround();\n                    console.log('joined media room:');\n                });\n                self.mediaRoomInstance.on('peerJoin', peerId => {\n                    console.log('join the peer:' + peerId);\n                });\n                self.mediaRoomInstance.on('stream', stream => {\n                    console.log('receive stream');\n                    resolve({ type: 'stream', value: stream });\n                });\n                self.mediaRoomInstance.on('error', error => {\n                    reject(error);\n                });\n            });\n        });\n    }\n\n    getSkyWayInstance() {\n        return this.skywayInstance;\n    }\n\n    _sfuWorkAround() {\n        const self = this;\n        return new Promise((resolve, reject) => {\n            const dummyPeer = new skyway_js__WEBPACK_IMPORTED_MODULE_0___default.a({ key: self.options.APIKEY });\n            dummyPeer.on('open', () => {\n                const dummyRoom = dummyPeer.joinRoom(self.roomName, { mode: 'sfu' });\n                dummyRoom.on('close', () => {\n                    dummyPeer.destroy();\n                    resolve(true);\n                });\n                dummyRoom.on('open', () => {\n                    dummyRoom.close();\n                });\n                dummyRoom.on('error', err => {\n                    reject('SFU work around is error:' + err);\n                });\n            });\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (skywayHelper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2t5d2F5SGVscGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9za3l3YXlIZWxwZXIuanM/MTk0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBQZWVyIGZyb20gJ3NreXdheS1qcyc7XG5cbmNsYXNzIHNreXdheUhlbHBlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmxvY2FsQXVkaW9TdHJlYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnNreXdheUluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZWRpYVJvb21JbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGVlcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5yb29tTmFtZSA9IHBhcmFtLnJvb21OYW1lO1xuXG4gICAgICAgIGRlbGV0ZSBwYXJhbS5yb29tTmFtZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gcGFyYW07XG4gICAgfVxuXG4gICAgam9pbk1lZGlhUm9vbSgpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5za3l3YXlJbnN0YW5jZSA9IG5ldyBQZWVyKHtrZXk6IHRoaXMub3B0aW9ucy5BUElLRVksZGVidWc6IDN9KTtcbiAgICAgICAgICAgIHNlbGYuc2t5d2F5SW5zdGFuY2Uub24oJ29wZW4nLCBwZWVySWQgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYucGVlcklkID0gcGVlcklkO1xuICAgICAgICAgICAgICAgIHNlbGYubWVkaWFSb29tSW5zdGFuY2UgPSBzZWxmLnNreXdheUluc3RhbmNlLmpvaW5Sb29tKHNlbGYucm9vbU5hbWUse21vZGU6IHNlbGYub3B0aW9ucy5tb2RlfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5tZWRpYVJvb21JbnN0YW5jZS5vbignb3BlbicsIGFzeW5jICgpID0+e1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLl9zZnVXb3JrQXJvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqb2luZWQgbWVkaWEgcm9vbTonKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLm1lZGlhUm9vbUluc3RhbmNlLm9uKCdwZWVySm9pbicsIHBlZXJJZCA9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvaW4gdGhlIHBlZXI6JyArIHBlZXJJZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5tZWRpYVJvb21JbnN0YW5jZS5vbignc3RyZWFtJywgc3RyZWFtID0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVjZWl2ZSBzdHJlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7dHlwZTonc3RyZWFtJyx2YWx1ZTpzdHJlYW19KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLm1lZGlhUm9vbUluc3RhbmNlLm9uKCdlcnJvcicsIGVycm9yID0+e1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBnZXRTa3lXYXlJbnN0YW5jZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5za3l3YXlJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBfc2Z1V29ya0Fyb3VuZCgpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGR1bW15UGVlciA9IG5ldyBQZWVyKHsga2V5OiBzZWxmLm9wdGlvbnMuQVBJS0VZIH0pO1xuICAgICAgICAgICAgZHVtbXlQZWVyLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1bW15Um9vbSA9IGR1bW15UGVlci5qb2luUm9vbShzZWxmLnJvb21OYW1lLCB7bW9kZTogJ3NmdSd9KTtcbiAgICAgICAgICAgICAgICBkdW1teVJvb20ub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkdW1teVBlZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGR1bW15Um9vbS5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHVtbXlSb29tLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZHVtbXlSb29tLm9uKCdlcnJvcicsIChlcnIpID0+e1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ1NGVSB3b3JrIGFyb3VuZCBpcyBlcnJvcjonICsgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNreXdheUhlbHBlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUFDQTtBQThEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/skywayHelper.js\n");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass utility {\n    constructor() {}\n    // nothing\n\n\n    /**\n     * video要素でMediaStreamを再生する\n     * @param element\n     * @param stream\n     */\n    static async playMediaStream(element, stream) {\n        element.srcObject = stream;\n        let playPromise = await element.play();\n        if (playPromise !== undefined) {\n            playPromise.then(() => {\n                console.log('play video');\n            }).catch(error => {\n                console.log('error auto play:' + error);\n            });\n        }\n    }\n\n    /**\n     * video要素でMediaStreamを停止する\n     * @param element\n     */\n    static stopMediaStream(element) {\n        element.pause();\n        element.srcObject = null;\n    }\n\n    /**\n     * 視聴人数をカウントする\n     * @param peer\n     */\n    static countViewers(peer) {\n        return new Promise((resolve, reject) => {\n            peer.listAllPeers(peers => {\n                if (peers.length !== 0) {\n                    resolve(peers.length - 1);\n                } else {\n                    reject(0);\n                }\n            });\n        });\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utility);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbGl0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvdXRpbGl0eS5qcz9mOWM4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbGl0eSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHZpZGVv6KaB57Sg44GnTWVkaWFTdHJlYW3jgpLlho3nlJ/jgZnjgotcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBzdHJlYW1cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgcGxheU1lZGlhU3RyZWFtKGVsZW1lbnQsc3RyZWFtKSB7XG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICBsZXQgcGxheVByb21pc2UgPSBhd2FpdCBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgaWYocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwbGF5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheSB2aWRlbycpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBhdXRvIHBsYXk6JyArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdmlkZW/opoHntKDjgadNZWRpYVN0cmVhbeOCkuWBnOatouOBmeOCi1xuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgc3RhdGljIHN0b3BNZWRpYVN0cmVhbShlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgZWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOimluiBtOS6uuaVsOOCkuOCq+OCpuODs+ODiOOBmeOCi1xuICAgICAqIEBwYXJhbSBwZWVyXG4gICAgICovXG4gICAgc3RhdGljIGNvdW50Vmlld2VycyhwZWVyKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcGVlci5saXN0QWxsUGVlcnMocGVlcnMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHBlZXJzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGVlcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsaXR5O1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQUNBO0FBZ0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utility.js\n");

/***/ }),

/***/ "./src/js/viewController.js":
/*!**********************************!*\
  !*** ./src/js/viewController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass viewController {\n\n    constructor() {\n        this.infomationFieldElement1 = document.getElementById('infomationField1');\n        this.infomationFieldElement2 = document.getElementById('infomationField2');\n    }\n\n    initView() {\n        // nothing\n    }\n\n    setInfomation1(string) {\n        this.infomationFieldElement1.innerHTML = string;\n    }\n\n    setInfomation2(string) {\n        this.infomationFieldElement2.innerHTML = string;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewController);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmlld0NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3ZpZXdDb250cm9sbGVyLmpzPzVlMGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB2aWV3Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uRmllbGRFbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvbWF0aW9uRmllbGQxJyk7XG4gICAgICAgIHRoaXMuaW5mb21hdGlvbkZpZWxkRWxlbWVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb21hdGlvbkZpZWxkMicpO1xuICAgIH1cblxuICAgIGluaXRWaWV3KCkge1xuICAgICAgICAvLyBub3RoaW5nXG4gICAgfVxuXG4gICAgc2V0SW5mb21hdGlvbjEoc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uRmllbGRFbGVtZW50MS5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgfVxuXG4gICAgc2V0SW5mb21hdGlvbjIoc3RyaW5nKXtcbiAgICAgICAgdGhpcy5pbmZvbWF0aW9uRmllbGRFbGVtZW50Mi5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3Q29udHJvbGxlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFtQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/viewController.js\n");

/***/ })

/******/ });