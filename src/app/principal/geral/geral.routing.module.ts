import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GeralComponent } from './geral.component';


const geralRoutes = [
    {path: '', component: GeralComponent }
];

@NgModule({
    imports: [RouterModule.forChild(geralRoutes)],
    exports: [RouterModule]
})
export class GeralRoutingModule {}