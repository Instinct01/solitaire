import { ESuit } from "./Config";


export default class Poker {
    public point: number = -1;
    public suit: ESuit = ESuit.HeiTao;

    constroctor(point?: number, suit?: ESuit) {
        if (point) this.point = point;
        if (suit) this.suit = suit;
    }

    // private point: number = -1;
    // private suit: ESuit = ESuit.HeiTao;

}
