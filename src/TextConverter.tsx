import { ConversionStrategy } from "./ConversionStrategy";
import {
  CamelCaseStrategy,
  SnakeCaseStrategy,
  KebabCaseStrategy,
  UpperCaseStrategy,
  LowerCaseStrategy,
  StartCaseStrategy,
  CapitalizeStrategy,
  DeburrStrategy,
  TrimStrategy,
  UpperFirstStrategy,
  SentenceCase,
} from "./convertionStrategies";
import {
  ReverseCamelCaseStrategy,
  ReverseSnakeCaseStrategy,
  ReverseKebabCaseStrategy,
  ReverseUpperCaseStrategy,
  ReverseLowerCaseStrategy,
  ReverseStartCaseStrategy,
  ReverseDeburrStrategy,
  ReverseTrimStrategy,
  ReverseUpperFirstStrategy,
  ReverseSentenceCaseStrategy,
} from "./reversedConversionStrategies";

export class TextConverter {
  private inputStrategy: ConversionStrategy;
  private outputStrategy: ConversionStrategy;

  constructor(inputCaseType: string, outputCaseType: string) {
    this.inputStrategy = this.getInputStrategy(inputCaseType);
    this.outputStrategy = this.getOutputStrategy(outputCaseType);
  }

  private getInputStrategy(caseType: string): ConversionStrategy {
    switch (caseType) {
      case "sentence case":
        return new ReverseSentenceCaseStrategy();
      case "camel case":
        return new ReverseCamelCaseStrategy();
      case "snake case":
        return new ReverseSnakeCaseStrategy();
      case "kebab case":
        return new ReverseKebabCaseStrategy();
      case "upper case":
        return new ReverseUpperCaseStrategy();
      case "lower case":
        return new ReverseLowerCaseStrategy();
      case "start case":
        return new ReverseStartCaseStrategy();
      case "deburr":
        return new ReverseDeburrStrategy();
      case "trim":
        return new ReverseTrimStrategy();
      case "upper first":
        return new ReverseUpperFirstStrategy();
      default:
        throw new Error(`Invalid case type: ${caseType}`);
    }
  }

  private getOutputStrategy(caseType: string): ConversionStrategy {
    switch (caseType) {
      case "sentence case":
        return new SentenceCase();
      case "camel case":
        return new CamelCaseStrategy();
      case "snake case":
        return new SnakeCaseStrategy();
      case "kebab case":
        return new KebabCaseStrategy();
      case "upper case":
        return new UpperCaseStrategy();
      case "lower case":
        return new LowerCaseStrategy();
      case "start case":
        return new StartCaseStrategy();
      case "deburr":
        return new DeburrStrategy();
      case "trim":
        return new TrimStrategy();
      case "upper first":
        return new UpperFirstStrategy();
      default:
        throw new Error(`Invalid case type: ${caseType}`);
    }
  }

  setInputCaseType(caseType: string): void {
    this.inputStrategy = this.getInputStrategy(caseType);
  }

  setOutputCaseType(caseType: string): void {
    this.outputStrategy = this.getOutputStrategy(caseType);
  }

  convert(text: string): string {
    const normalCaseText = this.inputStrategy.convert(text);
    return this.outputStrategy.convert(normalCaseText);
  }
}
