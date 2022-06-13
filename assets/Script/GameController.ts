import GameView from "./View/GameView/GameView";
import Poker from "./View/GameView/Poker/Poker";
import UIPoker from "./UIPoker ";

/**
 * 游戏牌局的管理者
 */
export default class GameController {

    private pokers: Poker[] = [];
    private GameView: GameView = null

    
     // 初始化扑克
    public Init(gameView: GameView): void {
        this.GameView = gameView;
    }

    public Start(): void {
        cc.log(">> GameController Start");
        for(let point = 1; point <= 13; point++) {
            for(let suit = 0; suit < 4; suit++) {
                let poker = new Poker(point, suit);
                this.pokers.push(poker);
            }
        }

        this.GameView.CreatePokers(this.pokers);

       
    }

   

 
}