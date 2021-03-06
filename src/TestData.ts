export enum Progression {
    forward, // (endTime - startTime) == (endRuntime - startRuntime) && >= 0
    jump, // startAge == endAge
    backward, // 
    point
 }

export function createTestData() {
    return [
        {
            startTime: new Date("2010-01-01T00:00:00.000Z"),
            endTime: new Date("2010-01-02T00:00:00.000Z"),
            startRuntime: years(20) + days(3),
            endRuntime: years(20) + days(4),
            progression: Progression.forward
        },
        {
            startTime: new Date("2010-01-02T00:00:00.000Z"),
            endTime: new Date("2010-01-05T00:00:00.000Z"),
            startRuntime: years(20) + days(4),
            endRuntime: years(20) + days(7),
            progression: Progression.jump
        },
        {
            startTime: new Date("2010-01-05T00:00:00.000Z"),
            endTime: new Date("2010-01-10T00:00:00.000Z"),
            startRuntime: years(20) + days(7),
            endRuntime: years(20) + days(12),
            progression: Progression.forward
        },
        {
            startTime: new Date("2010-01-10T00:00:00.000Z"),
            endTime: new Date("2010-01-07T00:00:00.000Z"),
            startRuntime: years(20) + days(12),
            endRuntime: years(20) + days(15),
            progression: Progression.backward
        },
        {
            startTime: new Date("2010-01-07T00:00:00.000Z"),
            endTime: new Date("2010-01-07T00:00:00.000Z"),
            startRuntime: years(20) + days(15),
            endRuntime: years(20) + days(15),
            progression: Progression.point
        }
    ]
}

export function createPersonTestData(name: string) {
    return { name, time: createTestData() }
}


function years(y: number) {
    return 60 * 60 * 24 * 365 * y;
}

function days(d: number) {
    return 60 * 60 * 24 * d;
}

