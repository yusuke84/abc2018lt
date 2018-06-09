'use strict';

import utility from './utility';
import skywayHelper from './skywayHelper';
import viewController from './viewController';

const skywayOptions = {
    APIKEY: 'f9dbc8e7-502b-49e8-a244-a6f34e65f6a3',
    mode: 'sfu',
    roomName: 'abc'
}

const skyway = new skywayHelper(skywayOptions);
const view = new viewController();
view.initView();

skyway.joinMediaRoom().then(result =>{
    if(result.type === 'stream'){
        utility.playMediaStream(document.getElementById('remote'),result.value);
        view.setInfomation1('<i class="fas fa-play-circle"></i> SkyWayで配信中');
        utility.countViewers(skyway.getSkyWayInstance()).then(result =>{
            view.setInfomation2('視聴者: ' + result + '人');
        });
    }
}).then(() =>{
    setInterval(() => {
        utility.countViewers(skyway.getSkyWayInstance()).then(result =>{
            view.setInfomation2('視聴者: ' + result + '人');
        });
    },2000);
});