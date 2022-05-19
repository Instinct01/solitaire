import Poker from "./Poker";

/**
 * 游戏牌局的管理者
 */
export default class GameController {

    private poker: Poker[];

    public init (): void {

    }

    public Start(): void {
        cc.log("Start");
    }
}