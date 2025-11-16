const calculateTotal = require('./calculateTotal');

test("Коректно рахує суму", () => {
  const result = calculateTotal(100, 5);
  expect(result).toBe(105);
});

test("Працює з від’ємними числами", () => {
  const result = calculateTotal(-10, 4);
  expect(result).toBe(-6);
});

test("Повертає 0 при додаванні нулів", () => {
  const result = calculateTotal(0, 0);
  expect(result).toBe(0);
});

test("Повертає число як результат", () => {
  const result = calculateTotal(20, 22);
  expect(typeof result).toBe("number");
});
