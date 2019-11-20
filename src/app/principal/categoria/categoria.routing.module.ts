import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoriaComponent } from './categoria.component';
import { ListaComponent } from './lista/lista.component';
import { AddComponent } from './add/add.component';

const categoriaRoutes = [
    {path: '', component: CategoriaComponent },
    {path: 'lista', component: ListaComponent },
    {path: 'add', component: AddComponent },
    { path: ':id', component: CategoriaComponent, children:[ { path: '', component: CategoriaComponent } ] }
];

@NgModule({
    imports: [RouterModule.forChild(categoriaRoutes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule {}