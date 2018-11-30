export class TrekFaq {
  id: number;
  key: string;
  question: string;
  answer: string;

  constructor(obj: TrekFaq = {} as TrekFaq) {
    this.id = obj.id;
    this.key = obj.key;
    this.question = obj.question;
    this.answer = obj.answer;
  }
}
