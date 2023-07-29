import { ConversionStrategy } from "./ConversionStrategy";

export class ReverseSentenceCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text;
  }
}

export class ReverseCamelCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  }
}

export class ReverseSnakeCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/_/g, " ");
  }
}

export class ReverseKebabCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/-/g, " ");
  }
}

export class ReverseUpperCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.toLowerCase();
  }
}

export class ReverseLowerCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.toLowerCase();
  }
}

export class ReverseStartCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/\b\w/g, (c) => c.toLowerCase());
  }
}

export class ReverseCapitalizeStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.charAt(0).toLowerCase() + text.slice(1);
  }
}

export class ReverseDeburrStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}

export class ReverseTrimStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.trim();
  }
}

export class ReverseUpperFirstStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.charAt(0).toLowerCase() + text.slice(1);
  }
}
