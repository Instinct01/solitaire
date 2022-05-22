import { ESuit } from "./Config";
import Poker from "./Poker";

const { ccclass, property } = cc._decorator;

const POINT_MAP = {
    "1": "A",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "11": "J",
    "12": "Q",
    "13": "K",
}

@ccclass
export default class SlashScene extends cc.Component {

    @property(cc.Sprite)
    bigSuitSprite: cc.Sprite = null;

    @property(cc.Sprite)
    smallSuitSprite: cc.Sprite = null;

    @property(cc.Label)
    pointLaber: cc.Label = null;

    // resource
    @property(cc.SpriteFrame)
    bigSuit: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    smallSuit: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    texFaces: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    texFrontBG: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texBackBG: cc.SpriteFrame = null;

    private redTextColor: cc.Color = cc.color(183, 24, 40); // 初始化红色的数字颜色
    private blackTextColor: cc.Color = cc.Color.BLACK; // 初始化黑色的数字颜色

    // 一副poker的样式，点数，大花色，小花色，颜色
    public init(poker: Poker) {
        this.pointLaber.string = `${POINT_MAP[poker.point]}`; // 通过映射表去获取相应的点数
        this.pointLaber.node.color = (poker.suit == ESuit.HeiTao || poker.suit == ESuit.MeiHua) ? this.blackTextColor : this.redTextColor; // 颜色
        if (poker.point >= 11) { // 大花色
            this.bigSuitSprite.spriteFrame = this.texFaces[poker.point - 11];
        } else {
            this.bigSuitSprite.spriteFrame = this.bigSuit[poker.suit];
        }
        this.smallSuitSprite.spriteFrame = this.smallSuit[poker.suit]; // 小花色
    }
}
