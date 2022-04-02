import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INTRO_KEY, StorageService } from 'src/app/services/storage/storage.service';
import SwiperCore, { SwiperOptions, Keyboard, Pagination, EffectCube } from 'swiper';
// install Swiper modules
SwiperCore.use([Keyboard, Pagination, EffectCube]);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts: SwiperOptions = {};

  constructor(
    private router: Router,
    private storage: StorageService) { }

  ngOnInit() {
    this.animation();
  }

  async goToLogin() {
    await this.storage.setStorage(INTRO_KEY, 'true');
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
  }

  animation() {
    this.slideOpts = {
      pagination: { clickable: true },
      keyboard: { enabled: true },
      effect: 'cube'
    };
  }

}
