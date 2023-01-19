import { Component, Input } from '@angular/core';
import { AuthenticateService } from '../../../services/index';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private auth: AuthenticateService,
    private router: Router) {
    super();
  }

  logout(){
    this.auth.logout().subscribe(()=>{
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    });
  }
}
