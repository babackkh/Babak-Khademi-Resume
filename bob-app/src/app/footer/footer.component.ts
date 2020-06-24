import { Component, OnInit } from '@angular/core';
import { IconInjectorService } from '../services/icon-injector.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  musicStatusIcon = 'no-sound';

  constructor(private iconInjector: IconInjectorService) {}

  ngOnInit(): void {
    this.iconInjector.injectIcon('no-sound', 'assets/no-sound.svg');
    this.iconInjector.injectIcon('instagram', 'assets/instagram-sketched.svg');
    this.iconInjector.injectIcon('sound', 'assets/sound.svg');
  }

  onMusicIconClick() {
    this.musicStatusIcon =
      this.musicStatusIcon === 'no-sound' ? 'sound' : 'no-sound';
  }
}
