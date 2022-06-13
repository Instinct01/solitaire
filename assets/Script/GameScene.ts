import GameController from "./GameController";
import GameView from "./View/GameView/GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {



    @property(cc.Prefab)
    gameViewPrefab: cc.Prefab = null;

    private gameController: GameController = null;
    private gameView: GameView = null;

    start () {
        this.gameView = cc.instantiate(this.gameViewPrefab).getComponent(GameView);
        this.node.addChild(this.gameView.node);
        this.gameController = new GameController();
        this.gameController.Init(this.gameView);
        this.gameController.Start();
    }

    // update (dt) {}
}
