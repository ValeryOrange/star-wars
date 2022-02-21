import Move from '../interfaces/Move';
import Turn from '../interfaces/Turn';
import MoveTurn from '../interfaces/MoveTurn';
import {
    Position,
    VelocityVector,
} from '../types';

export class MoveableSpaceship extends Move {
    fuel: number;
    moveFuelCost: number;

    constructor(velocity: VelocityVector, pos: Position, fuel: number, moveFuelCost: number = 0) {
        super(velocity, pos);
        this.fuel = fuel;
        this.moveFuelCost = moveFuelCost;
    }

    public move(time: number) {
        if (this.fuel > 0) {
            this.changeCoordinates(time);
            this.changeFuelDeposit(-this.moveFuelCost);
        } else {
            throw new Error('Cannot move because fuel ran out! Please, refuel the ship.');
        }
    }

    private changeFuelDeposit(diff: number) {
        this.fuel += diff;
    }
}

export class TurnableSpaceship extends Turn {
    fuel: number;
    turnFuelCost: number;

    constructor(baseVelocity: number, angle = 0, fuel: number, turnFuelCost: number = 0) {
        super(baseVelocity, angle);
        this.fuel = fuel;
        this.turnFuelCost = turnFuelCost;
    }

    public turn(angle: number) {
        if (this.fuel > 0) {
            this.changeVelocityDirection(angle);
            this.changeFuelDeposit(-this.turnFuelCost);
        } else {
            throw new Error('Cannot turn because fuel ran out! Please, refuel the ship.');
        }
    }

    private changeFuelDeposit(diff: number) {
        this.fuel += diff;
    }
}

export class TurnableMoveableSpaceship extends MoveTurn {
    fuel: number;
    moveFuelCost: number;
    turnFuelCost: number;

    constructor(pos: Position = {x: 0, y: 0}, baseVelocity: number, angle = 0, fuel: number, turnFuelCost: number = 0, moveFuelCost: number = 0) {
        super(pos, baseVelocity, angle);
        this.fuel = fuel;
        this.moveFuelCost = moveFuelCost;
        this.turnFuelCost = turnFuelCost;
    }

    public move(time: number) {
        if (this.fuel > 0) {
            this.changeCoordinates(time);
            this.changeFuelDeposit(-this.moveFuelCost);
        } else {
            throw new Error('Cannot move because fuel ran out! Please, refuel the ship.');
        }
    }

    private changeFuelDeposit(diff: number) {
        this.fuel += diff;
    }

    public turn(angle: number) {
        if (this.fuel > 0) {
            this.changeVelocityDirection(angle);
            this.changeFuelDeposit(-this.turnFuelCost);
        } else {
            throw new Error('Cannot turn because fuel ran out! Please, refuel the ship.');
        }
    }
}
