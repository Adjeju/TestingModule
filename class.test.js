const TTime = require("./class");

describe("test class Progression", () => {
  test("should add 3 hours", () => {
    const time = new TTime(2, 3);
    const HOURS = 3;
    time.addHours(HOURS);
    expect(time._hours).toBe(5);
  });
  test("should add 22 hours", () => {
    const time = new TTime(2, 3);
    const HOURS = 22;
    time.addHours(HOURS);
    expect(time._hours).toBe(0);
  });
  test("should add 3 minutes", () => {
    const time = new TTime(2, 3);
    const MINUTES = 3;
    time.addMinutes(MINUTES);
    expect(time._minutes).toBe(6);
  });
  test("should add 57 minutes", () => {
    const time = new TTime(2, 3);
    const MINUTES = 57;
    time.addMinutes(MINUTES);
    expect(time._minutes).toBe(0);
  });
  test("should log '17:17'", () => {
    const MINUTES = 17;
    const HOURS = 17;
    const time = new TTime(HOURS, MINUTES);
    expect(time.showTime()).toBe("17:17");
  });
});
