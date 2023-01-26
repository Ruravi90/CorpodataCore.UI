import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { setTheme } from 'ngx-bootstrap/utils';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    public iconSet: IconSetService
  ) {
    iconSet.icons = { ...freeSet };
    setTheme('bs5'); // or 'bs4'
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    window.scrollTo(0, 0);
  }
}
