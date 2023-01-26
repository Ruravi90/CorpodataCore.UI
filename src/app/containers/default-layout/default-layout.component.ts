import { Component, Input } from '@angular/core';
import { User} from '../../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  public currentUser: User;

  public navItems = new Array();

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private router: Router) {
    let user = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(user!).claims;
    this.getMenu();

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  getMenu() {
    this.navItems.push(
      {
        name: 'Grupos empresariales',
        url: '/app/modules/business-group',
        icon: 'fas fa-users-viewfinder',
        children: null
      },
      {
        name: 'Socios',
        url: '/app/modules/parnets',
        icon: 'fas fa-handshake',
        children: null
      },
      {
        name: 'Archivos',
        icon: 'pi pi-folder',
        url: '/app/modules/files',
        children: null
      },
      {
        name: 'Obligaciones',
        icon: 'fas fa-business-time',
        url: '/app/modules/obligations',
        children: null
      },
      {
        name: 'Auditorias',
        icon: 'fas fa-square-check',
        url: '/app/modules/audit',
        children: null
      },
      {
        name: 'Gravamenes',
        icon: 'fas fa-vault',
        url: '/app/modules/encumbrances',
        children: null
      },
      {
        name: 'Vigilancia',
        icon: 'fas fa-eye',
        url: '/app/modules/vigilant',
        children: null
      },
      {
        name: 'Poderes (Escrituras)',
        icon: 'fas fa-scale-balanced',
        url: '/app/modules/company-power',
        children: null
      },
      {
        name: 'Enagenaciones',
        icon: 'fas fa-money-bill-transfer',
        url: '/app/modules/action-changes',
        children: null
      },
      {
        name: 'Transitorios',
        icon: 'fas fa-folder-tree',
        url: '/app/modules/transients',
        children: [
          {
            name: 'Clausulas',
            url: '/app/modules/transients/statutes',
            icon: 'fas fa-file-lines'
          },
          {
            name: 'Vigilancia',
            url: '/app/modules/transients/vigilant',
            icon: 'fas fa-eye'
          },
          {
            name: 'Poderes',
            url: '/app/modules/transients/power',
            icon: 'fas fa-gavel'
          },
          {
            name: 'Capital',
            url: '/app/modules/transients/capital',
            icon: 'fas fa-landmark'
          },
        ]
      },
      {
        name: 'Actas',
        icon: 'fas fa-folder-open',
        url: '/app/modules/acts',
        children: [
          {
            name: 'Asambleas',
            url: '/app/modules/acts/assambly',
            icon: 'fas fa-file-lines'
          },
          {
            name: 'Consejo',
            url: '/app/modules/acts/council',
            icon: 'fas fa-file-lines'
          }
        ]
      },
      {
        name: 'Contratos',
        icon: 'fas fa-address-book',
        url: '/app/modules/contract',
        children: [
          {
            name: 'Primarios',
            url: '/app/modules/contract/primary',
            icon: 'fas fa-file-lines'
          },
          {
            name: 'Secundarios',
            url: '/app/modules/contract/secundary',
            icon: 'fas fa-file-lines'
          },
        ]
      },
      {
        name: 'Inmuebles',
        icon: 'fas fa-house-chimney',
        url: '/app/modules/property',
        children: [
          {
            name: 'Inmuebles',
            url: '/app/modules/property/',
            icon: 'fas fa-house-chimney'
          },
          {
            name: 'Proyectos',
            url: '/app/modules/property/project',
            icon: 'fas fa-hotel'
          },
        ]
      },
      {
        name: 'Juicios',
        icon: 'fas fa-gavel',
        url: '/app/modules/trial',
        children: [
          {
            name: 'Primarios',
            url: '/app/modules/trial/primary',
            icon: 'fas fa-file-lines'
          },
          {
            name: 'Secundarios',
            url: '/app/modules/trial/secundary',
            icon: 'fas fa-file-lines'
          },
        ]
      },
      {
        name: 'Propiedad Intelectual',
        icon: 'fas fa-lightbulb',
        url: '/app/modules/industrial-property',
        children: [
          {
            name: 'Titulos',
            url: '/app/modules/industrial-property/title',
            icon: 'fas fa-file-lines'
          },
          {
            name: 'Procesos',
            url: '/app/modules/industrial-property/process',
            icon: 'fas fa-file-lines'
          },
        ]
      }
    );
  }

  getRoles(p: any) {
    if (this.currentUser == null) {
      return false;
    }
    let result = false;
    if (Array.isArray(p)) {
      p.forEach(v => {
        if (this.currentUser.profile == v) {
          result = true;
        }
      });
    } else if (typeof(p) === "string") {
      if (this.currentUser.profile == p) {
        result = true;
      }
    }
    return result;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
