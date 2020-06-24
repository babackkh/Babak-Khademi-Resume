import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconInjectorService } from '../services/icon-injector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private iconInjector: IconInjectorService) {}

  ngOnInit(): void {
    this.iconInjector.injectIcon('hamburger', 'assets/hamburger.svg');
  }
}
