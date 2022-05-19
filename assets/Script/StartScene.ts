const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Button)
    playBtn: cc.Button = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.log(">> GameScene: onLoad");
    }

    start () {
        // this.playBtn.node.on("click", (Button)=> {
        //     this.OnPlayBtnClick();
        // });
        this.playBtn.node.on("click", this.OnPlayBtnClick.bind(this));

    }

    OnPlayBtnClick(Button) {
        cc.log(`button name: ${Button.name}`);
        cc.director.loadScene("GameScene", ()=> {
            cc.log("Gameing");
        });
    }

    // update (dt) {}
}
