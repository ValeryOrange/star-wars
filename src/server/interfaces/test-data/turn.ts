export const testVelocityVector = [
    {
        name: 'successfull full turn with angle I quad',
        velocity: {
            x: 3,
            y: 4,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: 3,
            velocityVectorY: 4,
        }
    },
    {
        name: 'successfull full turn with angle II quad',
        velocity: {
            x: -3,
            y: 4,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: -3,
            velocityVectorY: 4,
        }
    },
    {
        name: 'successfull full turn with angle III quad',
        velocity: {
            x: -3,
            y: -4,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: -3,
            velocityVectorY: -4,
        }
    },
    {
        name: 'successfull full turn with angle IV quad',
        velocity: {
            x: 3,
            y: -4,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: 3,
            velocityVectorY: -4,
        }
    },
    {
        name: 'successfull full turn for zero angle',
        velocity: {
            x: 5,
            y: 0,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: 5,
            velocityVectorY: 0,
        }
    },
    {
        name: 'successfull full turn with -90 angle',
        velocity: {
            x: 0,
            y: -5,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: 0,
            velocityVectorY: -5,
        }
    },
    {
        name: 'successfull full turn with 90 angle',
        velocity: {
            x: 0,
            y: 5,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: 0,
            velocityVectorY: 5,
        }
    },
    {
        name: 'successfull full turn with 180 and -180 angle',
        velocity: {
            x: -5,
            y: 0,
        },
        turn: 360,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: -5,
            velocityVectorY: 0,
        }
    },
    {
        name: '90 degrees turn',
        velocity: {
            x: -3,
            y: -4,
        },
        turn: 90,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: 4,
            velocityVectorY: -3,
        }
    },
    {
        name: '-90 degrees turn',
        velocity: {
            x: -3,
            y: -4,
        },
        turn: -90,
        expectedData: {
            baseVelocity: 5,
            velocityVectorX: -4,
            velocityVectorY: 3,
        }
    }
];


export const testVelocityNumber = [
    {
        name: 'successfull full turn with angle I quad',
        velocity: 5,
        angle: 45,
        turn: 360,
    },
    {
        name: 'successfull full turn with angle II quad',
        velocity: 5,
        angle: 135,
        turn: 360,
    },
    {
        name: 'successfull full turn with angle III quad',
        velocity: 5,
        angle: 225,
        turn: 360,
    },
    {
        name: 'successfull full turn with angle IV quad',
        velocity: 5,
        angle: -90,
        turn: 360,
    },
    {
        name: 'successfull full turn for zero angle',
        velocity: 5,
        angle: 0,
        turn: 360,
    },
    {
        name: 'successfull full turn with -90 angle',
        velocity: 5,
        angle: -90,
        turn: 360,
    },
    {
        name: 'successfull full turn with 90 angle',
        velocity: 5,
        angle: 90,
        turn: 360,
    },
    {
        name: 'successfull full turn with 180 and -180 angle',
        velocity: 5,
        angle: 180,
        turn: 360,
    },
    {
        name: '90 degrees turn',
        velocity: 5,
        angle: 45,
        turn: 90,
    },
    {
        name: '-90 degrees turn',
        velocity: 5,
        angle: 45,
        turn: -90,
    }
];
