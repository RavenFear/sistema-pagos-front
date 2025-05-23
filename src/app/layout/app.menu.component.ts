import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/']
                    },
                ]
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Crear usuario',
                        icon: 'pi pi-user',
                        routerLink: ['/user']
                    },
                    {
                        label: 'Realizar pago',
                        icon: 'pi pi-wallet',
                        routerLink: ['/payment']
                    },
                ]
            }
        ];
    }
}
