import { NgModule } from "@angular/core";
//El routerModule es el que le va a decir a Angular si estas son las rutas principales o rutas hijas
import { Routes, RouterModule} from "@angular/router";
import { AgregarProductoComponent } from "./producto/agregar-producto.component";
import { ProductoComponent } from "./producto/producto.component";
import { VerProductosComponent } from "./producto/ver-productos.component";
import { CommonModule } from '@angular/common';
import { EditarProductoComponent } from "./producto/editar-producto.component";

//Aquí tengo mis rutas
const app_routes: Routes = [
    {path: '', redirectTo:'/ver-productos',pathMatch:'full' },
    {path:'ver-productos', component:ProductoComponent},
    {path:'agregar', component:AgregarProductoComponent},
    {path:'editar/:codigo', component:EditarProductoComponent}
    //Ponemos pathMatch full para asegurarnos de que funcione mejor
    //{path:'**', redirectTo:''}
];

@NgModule({

    //le paso el arreglo de tipo de rutas
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true}),
        CommonModule
    ],
    //Exportamos para que pueda ser utilizado afuera de este componente
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}