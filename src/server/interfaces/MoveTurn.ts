import Move from './Move';
import Turn from './Turn';
import {
    Position,
    VelocityVector,
} from '../types';

interface MoveableTurnableObjects extends Move, Turn {}

/**
 * методы для движения в многомерном пространстве
 */
export default class MoveTurn implements MoveableTurnableObjects {
    pos: Position;
    velocityVector: VelocityVector;
    baseVelocity: number;
    angle: number;

    /**
     * @param pos начальная позиция
     * @param baseVelocity скорость движения по прямой
     * @param angle угол поворота в градусах
     */
    constructor(pos: Position = {x: 0, y: 0}, velocity: number | VelocityVector, angle = 0) {
        this.pos = pos;
        if (typeof velocity === 'number') {
            this.baseVelocity = velocity;
            this.angle = Turn.calculateAngleRad(angle);
            this.velocityVector = Turn.setVelocityVector(velocity, this.angle);
        } else {
            this.velocityVector = velocity;
            this.baseVelocity = Turn.setBaseVelocity(velocity);
            this.angle = Turn.setAngle(velocity);
        }
    }

    /**
     * передвигает объект на новую точку
     * @param time время движения
     */
    public move(time: number) {
        const isResting = Object.values(this.velocityVector).every(item => item === 0);
        if (isResting) {
            throw new Error('Cannot move a resting object!');
        }
        this.changeCoordinates(time);
    }

    /**
     * задает новые координаты
     * @param time время движения
     */
    changeCoordinates(time: number) {
        for (const [key, value] of Object.entries(this.pos)) {
            this.pos[key] = Move.setNewCoord(value, this.velocityVector[key], time);
        }
    }

    /**
     * изменяет направление вектора скорости
     * @param angle угол поворота в радианах
     */
    changeVelocityDirection(angle: number) {
        this.angle = angle;
        this.velocityVector = Turn.setVelocityVector(this.baseVelocity, angle);
    }

    /**
     * поворачивает объект на игровом поле
     * @param angle угол поворота в градусах
     */
    public turn(angle: number) {
        if (!angle) {
            throw new Error(('Cannot turn this object with 0 angle'));
        }
        const angleRad = Turn.calculateAngleRad(angle);
        const turn = this.angle + angleRad;
        this.changeVelocityDirection(turn);
    }
}
