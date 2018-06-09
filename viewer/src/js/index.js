'use strict';

import utility from './utility';
import skywayHelper from './skywayHelper';

const skywayOptions = {
    APIKEY: 'f9dbc8e7-502b-49e8-a244-a6f34e65f6a3',
    mode: 'sfu',
    roomName: 'abc'
}

const skyway = new skywayHelper(skywayOptions);

skyway.joinMediaRoom().then(result =>{
    if(result.type === 'stream'){
        utility.playMediaStream(document.getElementById('remote'),result.value);
        utility.setHostStats(true);
        utility.countViewers(skyway.getSkyWayInstance()).then(result =>{
            utility.setViewersCount(result);
        });
    }
}).then(() =>{
    setInterval(() => {
        utility.countViewers(skyway.getSkyWayInstance()).then(result =>{
            utility.setViewersCount(result);
        });
    },2000);
});