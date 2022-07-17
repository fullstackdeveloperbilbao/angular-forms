export class User {
  constructor(
    public name: string,
    public age: number,
    public hobbies: string[],
    public lastName?: string
  ) {}
}
