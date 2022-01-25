export default abstract class Adapter <T, R> {
  protected readonly response: T;

  constructor(response: T) {
    this.response = response;
  }

  abstract getConvertedResponse(): R;
}
