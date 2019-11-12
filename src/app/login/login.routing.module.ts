import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const loginRoutes = [
    {path: '', component: SigninComponent },
    {path: 'signin', component: SigninComponent },
    {path: 'signup', component: SignupComponent },
];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}