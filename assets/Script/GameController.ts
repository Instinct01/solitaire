import Poker from "./Poker";
import UIPoker from "./UIPoker";

/**
 * 游戏牌局的管理者
 */
export default class GameController {

    private pokerPrefab: cc.Prefab = null;
    private pokerContainer: cc.Node = null;
    private pokers: Poker[] = [];

    

    public Start(): void {
        cc.log("Start");
        for(let point = 1; point <= 13; point++) {
            for(let suit = 0; suit < 4; suit++) {
                let poker = new Poker(point, suit);
                this.pokers.push(poker);
            }
        }

        // 创建所有的扑克牌UI
        this.pokers.forEach(poker => {
            let uiPoker = this.CreateUIPoker(poker);
            this.pokerContainer.addChild(uiPoker.node);
        })
    }

    // 初始化扑克
    public init(pokerContainer: cc.Node, pokerPrefab: cc.Prefab): void {
        
        cc.log(">> init pokerPrafeb", this.pokers);
        this.pokerContainer = pokerContainer;
        this.pokerPrefab = pokerPrefab;
    }

    private CreateUIPoker(poker: Poker): UIPoker {
        // 创建逻辑
        let uiPoerNode = cc.instantiate(this.pokerPrefab); // 创建了一个Node对象
        let uiPoker: UIPoker = uiPoerNode.getComponent(UIPoker); // 获取Node里面的UIPoker组件
        uiPoker.init(poker);
        uiPoker.node.x = Math.random()*600 - 300;
        uiPoker.node.y = Math.random()*600 - 300;
        return uiPoker;
    }
}