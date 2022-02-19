import {
    Position,
    Velocity,
} from './types';

/**
 * устанавливает двумерное значение скорости
 * @param baseVelocity скорость по прямой
 * @param angle угол поворота в градусах на декартовой плоскости
 * @returns двумерное значение скорости, где x - скорость по вертикали,
 *          y - по горизонтали
 */
function setVelocity2D(baseVelocity: number, angle: number): Velocity {
    const angleRad = angle * Math.PI / 180;
    const velocity = {
        x: baseVelocity * Math.cos(angleRad),
        y: baseVelocity * Math.sin(angleRad),
    };
    return velocity;
}

/**
 * определяет значение координаты в конце движения
 * @param initCoord начальная координата
 * @param velocity скорость
 * @param time время движения
 * @returns координа
 */
function getCoord(initCoord: number, velocity: number, time: number): number {
    return initCoord + velocity * time;
}


function move(initPos: Position, time: number, velocity: Velocity): Position {
    const newCoord: Position = {...initPos};
    for (const [key, value] of Object.entries(initPos)) {
        newCoord[key] = getCoord(value, velocity[key], time);
    }
    return newCoord;
}
