'use strict';

class utility {
    constructor(){
        // nothing
    }

    /**
     * video要素でMediaStreamを再生する
     * @param element
     * @param stream
     */
    static async playMediaStream(element,stream) {
        element.srcObject = stream;
        let playPromise = await element.play();
        if(playPromise !== undefined){
            playPromise.then(() => {
                console.log('play video');
            }).catch(error => {
                console.log('error auto play:' + error);
            });
        }
    }

    /**
     * video要素でMediaStreamを停止する
     * @param element
     */
    static stopMediaStream(element) {
        element.pause();
        element.srcObject = null;
    }

    /**
     * 視聴人数をカウントする
     * @param peer
     */
    static countViewers(peer){
        return new Promise((resolve,reject) => {
            peer.listAllPeers(peers => {
                if(peers.length !== 0){
                    resolve(peers.length - 1);
                }else{
                    reject(0);
                }
            }); 
        });
    }

}

export default utility;

