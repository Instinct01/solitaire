import Poker from "./Poker";

const {ccclass, property} = cc._decorator;

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

    @property(cc.SpriteFrame)
    bigSuit: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    smallSuit: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    texFaces: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    texFrontBG: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    texbackBG: cc.SpriteFrame = null;

    redTextColor: cc.Color = cc.Color.RED; // 初始化红色的数字颜色
    blackTextColor: cc.Color = cc.Color.BLACK; // 初始化黑色的数字颜色

    public init (poker: Poker) { // TODO
        this.pointLaber.string = `${POINT_MAP[poker.point]}`; // 点数
        if (poker.point >= 11) {
            this.bigSuitSprite.spriteFrame = this.bigSuit[poker.point - 11]; // 大花色
        } else {
            this.bigSuitSprite.spriteFrame = this.bigSuit[poker.suit]; // 大花色
        }
        this.smallSuitSprite.spriteFrame = this.smallSuit[poker.suit]; // 小花色
    }
}
