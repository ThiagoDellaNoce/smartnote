import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnotacaoComponent } from './anotacao.component';
import { ListaComponent } from './lista/lista.component';
import { AddComponent } from './add/add.component';

const anotacaoRoutes = [
    {path: '', component: AnotacaoComponent },
    {path: 'lista', component: ListaComponent},
    {path: 'add', component: AddComponent},
    { path: ':id', component: AnotacaoComponent, children:[ { path: '', component: AnotacaoComponent } ] }
];

@NgModule({
    imports: [RouterModule.forChild(anotacaoRoutes)],
    exports: [RouterModule]
})
export class AnotacaoRoutingModule {}
