const {ccclass, property} = cc._decorator;

@ccclass
export default class SlashScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;


    start () {
        // init logic
        this.label.string = "这是加载场景";
        setTimeout(()=> {
            cc.director.loadScene("GameScene", ()=> {
                cc.log(">> On Game Scene Launched Callback");
            });
        }, 2000);
    }
}
