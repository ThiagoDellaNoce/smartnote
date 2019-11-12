import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


const principalRoutes = [
    {path: '', loadChildren: './geral/geral.module#GeralModule' },
    { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaModule' },
    { path: 'anotacao', loadChildren: './anotacao/anotacao.module#AnotacaoModule' },
    { path: '**', loadChildren: './geral/geral.module#GeralModule' }
];

@NgModule({
    imports: [RouterModule.forChild(principalRoutes)],
    exports: [RouterModule]
})
export class PrincipalRoutingModule {}