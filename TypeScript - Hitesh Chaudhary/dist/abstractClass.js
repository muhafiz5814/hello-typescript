"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// let photo = new TakePhoto("front", "black-white"); /* Not allowed to create instance or object of abstract class.*/
class Facebook extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.burst = 4;
    }
    getFilter() {
        return this.filter;
    }
}
