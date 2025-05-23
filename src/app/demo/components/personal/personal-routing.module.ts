import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUpdateUserDialogComponent} from "./create-update-user-dialog/create-update-user-dialog.component";

const routes: Routes = [
    {
        path: '',
        data: {breadcrumb: 'Crear usuario'},
        component: CreateUpdateUserDialogComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonalRoutingModule {

}
