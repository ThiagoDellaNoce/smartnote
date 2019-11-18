import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoriaComponent } from './categoria.component';
import { ListaComponent } from './lista/lista.component';
import { AddComponent } from './add/add.component';

const categoriaRoutes = [
    {path: '', component: ListaComponent },
    {path: 'lista', component: ListaComponent},
    {path: 'add', component: AddComponent}
];

@NgModule({
    imports: [RouterModule.forChild(categoriaRoutes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule {}