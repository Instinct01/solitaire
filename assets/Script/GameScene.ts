import GameController from "./GameController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Prefab)
    pokerPrefab: cc.Prefab = null;

    @property(cc.Node)
    pokerContainer: cc.Node = null;


    private gameController: GameController = null;

    onLoad() {
        
    }

    start () {
        this.gameController = new GameController();
        this.gameController.init(this.pokerContainer, this.pokerPrefab);
        this.gameController.Start();
    }

    // update (dt) {}
}
