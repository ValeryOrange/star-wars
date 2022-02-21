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

    /**
     * @param pos начальная позиция
     * @param baseVelocity скорость движения по прямой
     * @param angle угол поворота в градусах
     */
    constructor(pos: Position = {x: 0, y: 0}, baseVelocity: number, angle = 0) {
        this.baseVelocity = baseVelocity;
        this.velocityVector = MoveTurn.setVelocityVector(baseVelocity, angle);
        this.pos = pos;
    }

    /**
     * передвигает объект на новую точку
     * @param time время движения
     */
    public move(time: number) {
        this.changeCoordinates(time);
    }

    /**
     * задает новые координаты
     * @param time время движения
     */
    changeCoordinates(time: number) {
        for (const [key, value] of Object.entries(this.pos)) {
            this.pos[key] = MoveTurn.setNewCoord(value, this.velocityVector[key], time);
        }
    }

    /**
     * определяет значение координаты в конце движения
     * @param initCoord начальная координата
     * @param velocity вектор скорости вдоль соответствующей оси
     * @param time время движения
     */
    static setNewCoord(initCoord: number, velocity: number, time: number): number {
        return initCoord + velocity * time;
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
        this.velocityVector = MoveTurn.setVelocityVector(this.baseVelocity, angle);
    }

    /**
     * поворачивает объект на игровом поле
     * @param angle угол поворота в градусах
     */
    public turn(angle: number) {
        this.changeVelocityDirection(angle);
    }
}
