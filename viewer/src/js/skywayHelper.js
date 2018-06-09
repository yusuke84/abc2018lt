'use strict';

import Peer from 'skyway-js';

class skywayHelper {

    constructor(param) {
        this.localAudioStream = null;
        this.skywayInstance = null;
        this.mediaRoomInstance = null;
        this.peerId = null;
        this.roomName = param.roomName;

        delete param.roomName;
        this.options = param;
    }

    joinMediaRoom(){
        const self = this;
        return new Promise(async (resolve,reject) => {
            this.skywayInstance = new Peer({key: this.options.APIKEY,debug: 3});
            self.skywayInstance.on('open', peerId => {
                self.peerId = peerId;
                self.mediaRoomInstance = self.skywayInstance.joinRoom(self.roomName,{mode: self.options.mode});
                self.mediaRoomInstance.on('open', async () =>{
                    await self._sfuWorkAround();
                    console.log('joined media room:');
                });
                self.mediaRoomInstance.on('peerJoin', peerId =>{
                    console.log('join the peer:' + peerId);
                });
                self.mediaRoomInstance.on('stream', stream =>{
                    console.log('receive stream');
                    resolve({type:'stream',value:stream});
                });
                self.mediaRoomInstance.on('error', error =>{
                    reject(error);
                });
            }); 
        });   
    }

    getSkyWayInstance(){
        return this.skywayInstance;
    }

    _sfuWorkAround(){
        const self = this;
        return new Promise((resolve, reject) => {
            const dummyPeer = new Peer({ key: self.options.APIKEY });
            dummyPeer.on('open', () => {
                const dummyRoom = dummyPeer.joinRoom(self.roomName, {mode: 'sfu'});
                dummyRoom.on('close', () => {
                    dummyPeer.destroy();
                    resolve(true);
                });
                dummyRoom.on('open', () => {
                    dummyRoom.close();
                });
                dummyRoom.on('error', (err) =>{
                    reject('SFU work around is error:' + err);
                });
            });
        });
    }
}

export default skywayHelper;