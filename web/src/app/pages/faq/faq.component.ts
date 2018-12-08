import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { TrekFaq } from '@app/shared';

@Component({
  selector: 'trek-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqList: Array<TrekFaq>;
  selectedQuestion: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    this.route.data.pipe(take(1))
      .subscribe(data => this.faqList = [...data.faqItems]);
  }

  ngOnInit() {
    this.selectedQuestion = this.route.snapshot.queryParamMap.get('item');
  }

  ngAfterViewInit() {
    if (this.selectedQuestion) {
      this.scrollTo(this.selectedQuestion);
    }
  }

  onQuestionClicked(item: TrekFaq) {
    this.selectedQuestion = item.key;
    this.updateQueryString(item.key);
  }

  updateQueryString(item: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { item: item }
    });
  }

  scrollTo(itemKey: string):void {
    const elementList = document.querySelectorAll('#' + itemKey);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
}
