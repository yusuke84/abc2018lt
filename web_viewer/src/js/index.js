'use strict';

import utility from './utility';
import skywayHelper from './skywayHelper';

const skywayOptions = {
    APIKEY: 'f9dbc8e7-502b-49e8-a244-a6f34e65f6a3',
    mode: 'sfu',
    roomName: 'abc'
}

const skyway = new skywayHelper(skywayOptions);
let remoteStream = null;
const startStreaming = document.getElementById('start_streaming');

skyway.joinMediaRoom().then(result =>{
    if(result.type === 'stream'){
        remoteStream = result.value;
    }
}).then(() =>{
    setInterval(() => {
        utility.countViewers(skyway.getSkyWayInstance()).then(result =>{
            utility.setViewersCount(result);
        });
    },2000);
});

startStreaming.addEventListener('click' , ()=>{
    utility.playMediaStream(document.getElementById('remote'),remoteStream);
    utility.setHostStats(true);
    utility.countViewers(skyway.getSkyWayInstance()).then(result =>{
        utility.setViewersCount(result);
    })
});