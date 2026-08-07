import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit, OnDestroy {
  title = '';
  private sub: Subscription;

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.data.subscribe((data) => {
      this.title = data['title'] || '';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
