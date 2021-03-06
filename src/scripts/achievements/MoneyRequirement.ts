///<reference path="Requirement.ts"/>

class MoneyRequirement extends Requirement{
    constructor( requiredValue: number, type: GameConstants.AchievementOption = GameConstants.AchievementOption.more) {
        super(requiredValue, type);
    }

    public getProgress(){
        return Math.min(player.statistics.totalMoney(), this.requiredValue);
    }
}