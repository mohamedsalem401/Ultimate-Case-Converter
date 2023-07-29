import { TextConverter } from "./TextConverter";

describe("TextConverter", () => {
  test("CamelCaseStrategy should convert 'hello programming world' to 'helloProgrammingWorld'", () => {
    const textConverter = new TextConverter("sentence case", "camel case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("helloProgrammingWorld");
  });

  test("SnakeCaseStrategy should convert 'hello programming world' to 'hello_programming_world'", () => {
    const textConverter = new TextConverter("sentence case", "snake case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("hello_programming_world");
  });

  test("KebabCaseStrategy should convert 'hello programming world' to 'hello-programming-world'", () => {
    const textConverter = new TextConverter("sentence case", "kebab case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("hello-programming-world");
  });

  test("UpperCaseStrategy should convert 'hello programming world' to 'HELLO PROGRAMMING WORLD'", () => {
    const textConverter = new TextConverter("sentence case", "upper case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("HELLO PROGRAMMING WORLD");
  });

  test("LowerCaseStrategy should convert 'HELLO PROGRAMMING world' to 'hello programming world'", () => {
    const textConverter = new TextConverter("sentence case", "lower case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("hello programming world");
  });

  test("StartCaseStrategy should convert 'hello programming world' to 'Hello Programming World'", () => {
    const textConverter = new TextConverter("sentence case", "start case");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("Hello Programming World");
  });

  test("DeburrStrategy should convert 'héllö prögrāmmïng wòrld' to 'hello programming world'", () => {
    const textConverter = new TextConverter("sentence case", "deburr");
    const result = textConverter.convert("héllö prögrāmmïng wòrld");
    expect(result).toBe("hello programming world");
  });

  test("TrimStrategy should convert '  hello programming world  ' to 'hello programming world'", () => {
    const textConverter = new TextConverter("sentence case", "trim");
    const result = textConverter.convert("  hello programming world  ");
    expect(result).toBe("hello programming world");
  });

  test("UpperFirstStrategy should convert 'hello programming world' to 'Hello programming world'", () => {
    const textConverter = new TextConverter("sentence case", "upper first");
    const result = textConverter.convert("hello programming world");
    expect(result).toBe("Hello programming world");
  });
});
