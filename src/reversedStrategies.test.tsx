import { TextConverter } from "./TextConverter";

describe("TextConverter - Reversed Strategies", () => {
  test("ReverseCamelCaseStrategy should convert 'helloProgrammingWorld' to 'hello programming world'", () => {
    const textConverter = new TextConverter("camel case", "sentence case");
    const result = textConverter.convert("helloProgrammingWorld");
    expect(result).toBe("hello programming world");
  });

  test("ReverseSnakeCaseStrategy should convert 'hello_programming_world' to 'hello programming world'", () => {
    const textConverter = new TextConverter("snake case", "sentence case");
    const result = textConverter.convert("hello_programming_world");
    expect(result).toBe("hello programming world");
  });

  test("ReverseKebabCaseStrategy should convert 'hello-programming-world' to 'hello programming world'", () => {
    const textConverter = new TextConverter("kebab case", "sentence case");
    const result = textConverter.convert("hello-programming-world");
    expect(result).toBe("hello programming world");
  });

  test("ReverseUpperCaseStrategy should convert 'HELLO PROGRAMMING WORLD' to 'hello programming world'", () => {
    const textConverter = new TextConverter("upper case", "sentence case");
    const result = textConverter.convert("HELLO PROGRAMMING WORLD");
    expect(result).toBe("hello programming world");
  });

  test("ReverseLowerCaseStrategy should convert 'hello programming world' to 'hello programming world'", () => {
    const textConverter = new TextConverter("lower case", "sentence case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("hello programming world");
  });

  test("ReverseStartCaseStrategy should convert 'Hello Programming World' to 'hello programming world'", () => {
    const textConverter = new TextConverter("start case", "sentence case");
    const result = textConverter.convert("Hello Programming World");
    expect(result).toBe("hello programming world");
  });

  test("ReverseDeburrStrategy should convert 'héllö programming wòrld' to 'hello programming world'", () => {
    const textConverter = new TextConverter("deburr", "sentence case");
    const result = textConverter.convert("héllö programming wòrld");
    expect(result).toBe("hello programming world");
  });

  test("ReverseTrimStrategy should convert '  hello programming world  ' to 'hello programming world'", () => {
    const textConverter = new TextConverter("trim", "sentence case");
    const result = textConverter.convert("  hello programming world  ");
    expect(result).toBe("hello programming world");
  });

  test("ReverseUpperFirstStrategy should convert 'Hello programming world' to 'hello programming world'", () => {
    const textConverter = new TextConverter("upper first", "sentence case");
    const result = textConverter.convert("Hello programming world");
    expect(result).toBe("hello programming world");
  });
});
