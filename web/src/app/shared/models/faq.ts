export class TrekFaq {
  id: number;
  key: string;
  question: string;
  answer: string;
  sortOrder: number;

  constructor(obj: TrekFaq = {} as TrekFaq) {
    this.id = obj.id;
    this.key = obj.key;
    this.question = obj.question;
    this.answer = obj.answer;
    this.sortOrder = obj.sortOrder;
  }
}
