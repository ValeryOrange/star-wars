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
    constructor(velocity: number | VelocityVector, angle = 0) {
        super(velocity, angle);
    }
}

export class TurnableMoveableTorpedo extends MoveTurn {
    constructor(pos: Position, velocity: number | VelocityVector, angle: number = 0) {
        super(pos, velocity, angle);
    }
}
