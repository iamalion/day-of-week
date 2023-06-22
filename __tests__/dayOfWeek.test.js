import DayOfWeek from "../src/dayOfWeek";

describe('DayOfWeek', () => {

    test ('should create a day of week object with a date', () => {
        const dayOfWeek = new DayOfWeek("March 23, 1986");
        expect(dayOfWeek.date).toBe("March 23, 1986");
    });
})