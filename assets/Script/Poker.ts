import { ESuit } from "./Config";


export default class Poker {
    public point: number = -1; //点数
    public suit: ESuit = ESuit.HeiTao; //花色
    
    constructor (point?: number, suit?: ESuit) {
        if (point) this.point = point;
        if (suit) this.suit = suit;
    }

    // private point: number = -1;
    // private suit: ESuit = ESuit.HeiTao;

}
