import {
  Component,
  OnInit,
  HostListener,
  Inject,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Babak Khademi';

  constructor(@Inject(DOCUMENT) private documenty: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollFromTop = this.documenty.documentElement.scrollTop;

    if (scrollFromTop > 120) {
      this.documenty
        .getElementById('footer-logo')
        .classList.add('translate-onscroll');
    } else if (scrollFromTop < 80) {
      this.documenty
        .getElementById('footer-logo')
        .classList.remove('translate-onscroll');
    } else if (scrollFromTop > 570) {
      this.documenty.getElementById('sec-2').classList.remove('sec-active');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll2() {
    const scrollFromTop = this.documenty.documentElement.scrollTop;

    if (scrollFromTop < 570) {
      this.documenty.getElementById('sec-1').classList.add('sec-active');
      this.documenty.getElementById('sec-2').classList.remove('sec-active');
    } else if (scrollFromTop > 570) {
      this.documenty.getElementById('sec-2').classList.add('sec-active');
      this.documenty.getElementById('sec-1').classList.remove('sec-active');
    } else if (scrollFromTop > 1140) {
      this.documenty.getElementById('sec-3').classList.add('sec-active');
      this.documenty.getElementById('sec-2').classList.remove('sec-active');
    }
    /* } else if (scrollFromTop > 570) {
      this.documenty.getElementById('sec-2').classList.remove('sec-active');
    } */
  }

  ngAfterViewInit() {
    this.onWindowScrollInit();
  }

  private onWindowScrollInit = () => {
    const scrollFromTop = this.documenty.documentElement.scrollTop;

    if (scrollFromTop > 120) {
      this.documenty
        .getElementById('footer-logo')
        .classList.add('translate-onscroll');
    } else if (scrollFromTop < 80) {
      this.documenty
        .getElementById('footer-logo')
        .classList.remove('translate-onscroll');
    }
  };
}
