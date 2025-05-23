import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: ''},
    {
        path: '', component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule)
            },
            {
                path: 'payment',
                data: {breadcrumb: 'Pagos'},
                loadChildren: () => import('./demo/components/payments/payments.module').then(m => m.PaymentsModule)
            },
            {
                path: 'user',
                data: {breadcrumb: 'Usuarios'},
                loadChildren: () => import('./demo/components/personal/personal.module').then(m => m.PersonalModule)
            }
        ]
    },
    {
        path: 'notfound',
        loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule)
    },
    {path: '**', redirectTo: '/notfound'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
