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
        await element.play().catch(console.error);
    }

    /**
     * 視聴人数をカウントする
     * @param peer
     */
    static countViewers(peer){
        return new Promise((resolve,reject) => {
            peer.listAllPeers(peers => {
                if(peers.length > 1){
                    resolve(peers.length - 1);
                }else{
                    reject(0);
                }
            }); 
        });
    }

    /**
     * 配信者のステータスを設定する 
     * @param boolean state 
     */
    static setHostStats(state = true){
        const infoElement = document.getElementById('informationField1');
        if(state){
            infoElement.innerHTML = '<i class="fas fa-play-circle"></i> SkyWayで配信中';
        }else{
            infoElement.innerHTML = '配信が開始されていません';
        }
    }

    /**
     * 配信者の人数を設定する
     * @param count 
     */
    static setViewersCount(count){
        const infoElement = document.getElementById('informationField2');
        infoElement.innerHTML = '視聴者: ' + count + '人';
    }
    
}

export default utility;

