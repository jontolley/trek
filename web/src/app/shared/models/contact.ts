export class TrekContact {
  id: number;
  email: string;
  name: string;
  message: string;
  ward: string;

  constructor(obj: TrekContact = {} as TrekContact) {
    this.id = obj.id;
    this.email = obj.email;
    this.name = obj.name;
    this.message = obj.message;
    this.ward = obj.ward;
  }
}
