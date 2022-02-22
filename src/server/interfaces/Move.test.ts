import Move from './Move';

describe('test Moveable objects', () => {
    // Для объекта, находящегося в точке (12, 5) и движущегося со
    // скоростью (-7, 3) движение меняет положение объекта на (5, 8)
    it('successfull movement', () => {
        const velocity = {x: -7,y: 3};
        const initPos = {x: 12, y: 5};
        const someObject = new Move(velocity, initPos);
        someObject.move(1);
        expect(someObject.pos.x).toBe(5);
        expect(someObject.pos.y).toBe(8);
    });
    /**
     * Попытка сдвинуть объект, у которого невозможно прочитать
     * значение мгновенной скорости, приводит к ошибке
     */
    it('error when try to move a resting object', () => {
        const someObject = new Move();
        expect(() => {
            someObject.move(1);
        }).toThrowError('Cannot move a resting object!');
    });
    /**
     * Попытка сдвинуть объект, у которого невозможно изменить
     * положение в пространстве, приводит к ошибке
    */
});