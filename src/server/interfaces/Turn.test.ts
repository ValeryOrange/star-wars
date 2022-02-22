import Turn from './Turn';
import {testVelocityVector, testVelocityNumber} from './test-data/turn';

function round(floatNumber: number, digits: number) {
    const level = Math.pow(10, digits);
    return Math.ceil(floatNumber * level)/level;
}
describe('test Turnable objects', () => {
    describe('test errors', () => {
        it('error when angle is 0 with velocity vector', () => {
            const velocity = {x: 3,y: 4};
            const TurnableObject = new Turn(velocity);
            expect(() => TurnableObject.turn(0)).toThrowError('Cannot turn this object with 0 angle');
        });
        it('error when angle is 0 with velocity number', () => {
            const velocity = 5;
            const angle = 45;
            const TurnableObject = new Turn(velocity, angle);
            expect(() => TurnableObject.turn(0)).toThrowError('Cannot turn this object with 0 angle');
        });
    });
    describe('test velocity vector', () => {
        testVelocityVector.forEach(({name, velocity, turn, expectedData}) => {
            it(name, () => {
                const TurnableObject = new Turn(velocity);
                TurnableObject.turn(turn);
                const { baseVelocity, velocityVectorX, velocityVectorY } = expectedData;
                expect(TurnableObject.baseVelocity).toBe(baseVelocity);
                expect(TurnableObject.velocityVector.x).toBe(velocityVectorX);
                expect(TurnableObject.velocityVector.y).toBe(velocityVectorY);
            })
        })
    });

    describe('test velocity number', () => {
        testVelocityNumber.forEach(({name, angle = 0, velocity, turn}) => {
            it(name, () => {
                const TurnableObject = new Turn(velocity, angle);
                TurnableObject.turn(turn);
                const newAngleRad = Turn.calculateAngleRad(angle + turn);
                expect(round(TurnableObject.angle, 3)).toBe(round(newAngleRad, 3));
            })
        })
    });
});