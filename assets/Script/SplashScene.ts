const {ccclass, property} = cc._decorator;

@ccclass
export default class SlashScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;


    start () {
        // init logic
        this.label.string = "这是加载场景";
        setTimeout(()=> {
            cc.director.loadScene("StartScene", ()=> {
                cc.log(">> On Start Scene Launched Callback");
            });
        }, 1000);
    }
}
