import {
    VelocityVector,
} from '../types';

interface TurnableObject {
    baseVelocity: number;
    velocityVector: VelocityVector,
    turn: (angle: number) => void,
}

/**
 * Методы для осуществления поворота в двумерном пространстве
 */
export default class Turn implements TurnableObject {
    baseVelocity: number;
    velocityVector: VelocityVector;

    /**
     * @param baseVelocity скорость движения по прямой
     * @param angle угол поворота в градусах
     */
    constructor(velocity: VelocityVector | number, angle = 0) {
        if (typeof velocity === 'number') {
            this.baseVelocity = velocity;
            this.velocityVector = Turn.setVelocityVector(velocity, angle);
        } else {
            this.velocityVector = velocity;
            this.baseVelocity = Turn.setBaseVelocity(velocity);
        }
    }

    static setBaseVelocity(velocity: VelocityVector): number {
        const velocitySquare = Object.values(velocity).reduce((squareSum: number, value: number) => {
            return squareSum + value * value;
        }, 0);
        const baseVelocity = Math.sqrt(velocitySquare);
        return baseVelocity;
    }

    /**
     * устанавливает двумерное значение скорости
     * @param baseVelocity скорость по прямой
     * @param angle угол поворота в градусах на декартовой плоскости
     * @returns двумерное значение скорости, где x - скорость по вертикали,
     *          y - по горизонтали
     */
    static setVelocityVector(baseVelocity: number, angle: number): VelocityVector {
        const angleRad = angle * Math.PI / 180;
        const velocityVector = {
            x: baseVelocity * Math.cos(angleRad),
            y: baseVelocity * Math.sin(angleRad),
        };
        return velocityVector;
    }

    /**
     * изменяет направление вектора скорости
     * @param angle угол поворота в градусах
     */
    changeVelocityDirection(angle: number) {
        this.velocityVector = Turn.setVelocityVector(this.baseVelocity, angle);
    }

    /**
     * поворачивает объект на игровом поле
     * @param angle угол поворота в градусах
     */
    public turn(angle: number) {
        this.changeVelocityDirection(angle);
    }
}
