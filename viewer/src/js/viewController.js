'use strict';

class viewController {

    constructor() {
        this.infomationFieldElement1 = document.getElementById('infomationField1');
        this.infomationFieldElement2 = document.getElementById('infomationField2');
    }

    initView() {
        // nothing
    }

    setInfomation1(string){
        this.infomationFieldElement1.innerHTML = string;
    }

    setInfomation2(string){
        this.infomationFieldElement2.innerHTML = string;
    }
}

export default viewController;
