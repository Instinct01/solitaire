import Poker from "./Poker/Poker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component {
    @property(cc.Prefab)
    pokerPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    closeSendArea: cc.Prefab = null;

    @property(cc.Prefab)
    openSendArea: cc.Prefab[] = [];

    @property(cc.Prefab)
    peceiveSendArea: cc.Prefab[] = [];

    @property(cc.Prefab)
    playGroupAnchor: cc.Prefab = null;
    private playGroupAnchorList: cc.Node[] = [];

    public pokerContainer: cc.Node = null;

    onLoad() {
        
    }

    Start () {

    }

    public CreatePokers(pokers: Poker[]) {
         // 创建所有的扑克牌UI
         pokers.forEach(poker => {
            let uiPoker = this.CreateUIPoker(poker);
            this.pokerContainer.addChild(uiPoker.node);
        })
    }

    private CreateUIPoker(poker: Poker): Poker {
        // 创建逻辑
        let uiPoerNode = cc.instantiate(this.pokerPrefab); // 创建了一个Node对象
        let uiPoker: UIPoker = uiPoerNode.getComponent(UIPoker); // 获取Node里面的UIPoker组件
        uiPoker.init(poker);
        uiPoker.node.x = Math.random()*600 - 300;
        uiPoker.node.y = Math.random()*600 - 300;
        return uiPoker;
    }
    // update (dt) {}
}