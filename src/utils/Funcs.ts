
export class Funcs {

  static removeAllWeirdCharacters(text: string) {
    var regexPattern = /[^A-Za-z0-9]/g;
    return text.replace(regexPattern, " ").split(" ").slice(0, 4).join(" ");
  }

}
