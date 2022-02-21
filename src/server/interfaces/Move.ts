import {
    Position,
    VelocityVector,
} from '../types';

interface MoveableObject {
    pos: Position,
    velocityVector: VelocityVector,
    move: (time: number) => void,
}

/**
 * методы для движения в многомерном пространстве
 */
export default abstract class Move implements MoveableObject {
    pos: Position;
    velocityVector: VelocityVector;

    /**
     * @param velocityVector вектор скорости на игровом поле
     * @param pos начальная позиция
     */
    constructor(velocity: VelocityVector, pos: Position) {
        this.velocityVector = velocity;
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
            this.pos[key] = Move.setNewCoord(value, this.velocityVector[key], time);
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
}
