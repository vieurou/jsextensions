//extensions/string.extension.js

declare global {
  interface String {
    removeFirstChar(): string;
    isOnlyDigits(): boolean;
    isOnlyAlphas(): boolean;
    containsDigit(): boolean;
    containsAlpha(): boolean;
    isEmptyOrWhitespace(): boolean;
    capitalizeFirstLetter(): string;
    capitalizeAllFirstLetters(): string;
    toCamelCase(): string;
    toPascalCase(): string;
    capitalizeWords(): string;
    countOccurrences(substring: string): number;
    replaceAllOccurence(search: string | RegExp, replacement: string): string;
    removeAllOccurence(search: string): string;
    removeAllOccurenceButFirst(search: string): string;
    removeAllOccurenceButLast(search: string): string;
    removeFirstOccurence(search: string | RegExp): string;
    removeLastOccurence(search: string): string;
    removeFirstAndLastOccurence(search: string): string;
    reverse(): string;
    trim(): string;
    endsWith(substring: string): boolean;
    startsWith(substring: string): boolean;
    contains(substring: string): boolean;
    toSlug(): string;
    addBalise(balise: string): string;
    isFinessValid(): boolean;
    formatToFiness(): string;
    isFrenchSocialSecurityNumberValid(withKey?: null | boolean): boolean;
    isFrenchSocialSecurityNumberValidWithKey(): boolean;
    isFrenchSocialSecurityNumberValidWithoutKey(): boolean;
    formatToFrenchSocialSecurityNumber(): string;
    isFrenchPhoneNumberValid(): boolean;
    formatToFrenchPhoneNumber(): string;
    isFrenchZipCodeValid(): boolean;
    formatToFrenchZipCode(): string;
    isFrenchSirenValid(): boolean;
    formatToFrenchSiren(): string;
    isFrenchSiretValid(): boolean;
    formatToFrenchSiret(): string;
    isFrenchTvaIntracomValid(): boolean;
    formatToFrenchTvaIntracom(): string;
    isFrenchIbanValid(): boolean;
    formatToFrenchIban(): string;
    isFrenchBicValid(): boolean;
    formatToFrenchBic(): string;
    isFrenchAdeliValid(): boolean;
    formatToFrenchAdeli(): string;
    isFrenchRPPSValid(): boolean;
    isFrenchInternePPValid(): boolean;
    formatToFrenchRPPS(): string;
    formatToNPP(): string;
    removeSpaces(): string;
    getFirstCharacters(nbCharacter): string;
    isNumber(): boolean;
    isInteger(): boolean;
    isFloat(): boolean;
    isDouble(): boolean;
    isBoolean(): boolean;
    isDate(): boolean;
    isDateTime(): boolean;
    isTime(): boolean;
    isTimeStamp(): boolean;
    isJson(): boolean;
    isEmail(): boolean;
    isUrl(): boolean;
    isPhone(): boolean;
    isPostalCode(): boolean;
    isIp(): boolean;
    isMac(): boolean;
    isHex(): boolean;
    isSlug(): boolean;
    isHexColor(): boolean;
    isRgbColor(): boolean;
    isRgbaColor(): boolean;
    isHslColor(): boolean;
    isHslaColor(): boolean;
    isCssColor(): boolean;
    toDateTime(): Date | null;
    toDate(): Date | null;
    isBefore(date: string | Date): boolean;
    isAfter(date: string | Date): boolean;
    limitToLength(length): string;
  }
}

export {};
