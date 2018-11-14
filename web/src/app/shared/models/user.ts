export class User {
  name: string;
  accountName: string;
  isAdmin: boolean;

  constructor(obj: User = {} as User) {
    this.name = obj.name;
    this.accountName = obj.accountName;
    this.isAdmin = obj.isAdmin;
  }
}
