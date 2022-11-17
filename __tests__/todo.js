/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueLater, dueToday } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("should add new todo", () => {
    const count0 = all.length;
    add({
      title: "Test Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(count0 + 1);
  });
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("retrival of overdue", () => {
    expect(overdue()).toStrictEqual(
      all.filter(
        (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
      )
    );
  });
  test("retrival of due today", () => {
    expect(dueToday()).toStrictEqual(
      all.filter(
        (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
      )
    );
  });
  test("retrival of due later", () => {
    expect(dueLater()).toStrictEqual(
      all.filter(
        (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
      )
    );
  });
});
