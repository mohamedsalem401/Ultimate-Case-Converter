import { ConversionStrategy } from "./ConversionStrategy";

export class SentenceCase implements ConversionStrategy {
  convert(text: string): string {
    return text;
  }
}

export class CamelCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/[-_\s](\w)/g, (_, c) => c.toUpperCase());
  }
}

export class SnakeCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/\s+/g, "_");
  }
}

export class KebabCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/\s+/g, "-");
  }
}

export class UpperCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.toUpperCase();
  }
}

export class LowerCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.toLowerCase();
  }
}

export class StartCaseStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.replace(/(^|\s)\w/g, (match) => match.toUpperCase());
  }
}
export class CapitalizeStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

export class DeburrStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}

export class TrimStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.trim();
  }
}

export class UpperFirstStrategy implements ConversionStrategy {
  convert(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
