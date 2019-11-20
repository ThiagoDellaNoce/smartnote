import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GeralComponent } from './principal/geral/geral.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const appRoutes: Routes = [
    { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'principal', loadChildren: './principal/principal.module#PrincipalModule', canActivate: [AngularFireAuthGuard]},
    { path: '**', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {}