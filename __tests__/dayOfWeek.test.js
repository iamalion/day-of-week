import DayOfWeek from "../src/dayOfWeek";

describe('DayOfWeek', () => {

    test ('should create a day of week object with a date', () => {
        const dayOfWeek = new DayOfWeek("March 23, 1986");
        expect(dayOfWeek.date.getDate()).toBe(23);
        expect(dayOfWeek.date.getMonth()).toBe(2);
        expect(dayOfWeek.date.getFullYear()).toBe(1986);

    });

    test ('should output day of the week depending on date',() => {
        const dayOfWeek = new DayOfWeek("March 23, 1986");
        expect(dayOfWeek.getWeekday()).toBe("Sunday");
    });

    test ('should output the string "invalid date"', () => {
        const dayOfWeek = new DayOfWeek("Sept 14, 275760");
        expect(dayOfWeek.date.getDate()).toBe(NaN);
    });

    test ('should create a day of week object with a date', () => {
        const dayOfWeek = new DayOfWeek("Sept 12, 275760");
        expect(dayOfWeek.date.getDate()).toBe(12);
        expect(dayOfWeek.date.getMonth()).toBe(8);
        expect(dayOfWeek.date.getFullYear()).toBe(275760);

    });

    test ('should create a day of week object with a date', () => {
        const dayOfWeek = new DayOfWeek("April 20, -271821");
        expect(dayOfWeek.date.getDate()).toBe(20);
        expect(dayOfWeek.date.getMonth()).toBe(3);
        expect(dayOfWeek.date.getFullYear()).toBe(271821);

    });
})