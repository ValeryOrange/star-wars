import {
    VelocityVector,
} from '../types';

interface TurnableObject {
    baseVelocity: number;
    velocityVector: VelocityVector,
    angle: number,
    turn: (angle: number) => void,
}

/**
 * Методы для осуществления поворота в двумерном пространстве
 */
export default class Turn implements TurnableObject {
    baseVelocity: number;
    velocityVector: VelocityVector;
    angle: number;

    /**
     * @param baseVelocity скорость движения по прямой
     * @param angle угол поворота в градусах
     */
    constructor(velocity: VelocityVector | number, angle = 0) {
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
     * рассчитывает скорость по прямой по переданному вектору
     * @param velocity вектор скорости
     * @returns скорость по прямой
     */
    static setBaseVelocity(velocity: VelocityVector): number {
        const velocitySquare = Object.values(velocity).reduce((squareSum: number, value: number) => {
            return squareSum + value * value;
        }, 0);
        const baseVelocity = Math.sqrt(velocitySquare);
        return baseVelocity;
    }

    /**
     * рассчитывает угол поворота по переданному вектору скорости
     * @param velocity вектор скорости
     * @returns угол поворота в радианах
     */
    static setAngle(velocity: VelocityVector): number {
        if (velocity.y === 0 && velocity.x > 0) {
            return 0;
        }
        if (velocity.y === 0 && velocity.x < 0) {
            return Math.PI;
        }
        const isIIQuad = velocity.x < 0 && velocity.y > 0;
        const isIIIQuad = velocity.x < 0 && velocity.y < 0;
        if (isIIQuad || isIIIQuad) {
            return Math.atan(velocity.y / velocity.x) + Math.PI;
        }
        return Math.atan(velocity.y / velocity.x);
    }

    /**
     * устанавливает двумерное значение скорости
     * @param baseVelocity скорость по прямой
     * @param angle угол поворота в радианах на декартовой плоскости
     * @returns двумерное значение скорости, где x - скорость по вертикали,
     *          y - по горизонтали
     */
    static setVelocityVector(baseVelocity: number, angle: number): VelocityVector {
        let x = Math.round(baseVelocity * Math.cos(angle));
        let y = Math.round(baseVelocity * Math.sin(angle));
        const velocityVector = {
            x: x === -0 ? 0 : x,
            y: y === -0 ? 0 : y,
        };
        return velocityVector;
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

    /**
     * рассчитывает значение угла в радианах
     * @param angle угол поворота в градусах
     * @returns угол поворота в радианах
     */
    static calculateAngleRad(angle: number) {
        return angle * Math.PI / 180;
    }
}
