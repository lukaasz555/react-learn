const add = (a, b) => a + b;

it("adds two values", () => {
  expect(add(2, 3)).not.toBe(7);
});

const users = ["jan", "jozef", "michal"];

it("containes user", () => {
  expect(users).toContain("jan");
  expect(users).not.toContain("darek");
});
