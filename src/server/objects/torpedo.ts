import Move from '../interfaces/Move';
import Turn from '../interfaces/Turn';
import MoveTurn from '../interfaces/MoveTurn';
import {
    Position,
    VelocityVector,
} from '../types';

export class MoveableTorpedo extends Move {
    constructor(velocity: VelocityVector, pos: Position) {
        super(velocity, pos);
    }
}

export class TurnableTorpedo extends Turn {
    constructor(baseVelocity: number, angle = 0) {
        super(baseVelocity, angle);
    }
}

export class TurnableMoveableTorpedo extends MoveTurn {
    constructor(pos: Position, baseVelocity: number, angle: number = 0) {
        super(pos, baseVelocity, angle);
    }
}
