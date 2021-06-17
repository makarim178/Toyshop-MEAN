import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { FuncComponentsComponent } from './components/func-components/func-components.component';
import { PageNoteFoundComponent } from './components/shared/page-note-found/page-note-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SingleProductComponent } from './components/func-components/single-product/single-product.component';
import { TpcomponentComponent } from './components/tpcomponent/tpcomponent.component';




const routes: Routes = [
    {path: '', component: FuncComponentsComponent },
    {path: 'login', component: LoginComponentComponent},
    {path: 'register', component: RegisterComponentComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'product', component: SingleProductComponent},
    {path: 'productdetails/:id', component: TpcomponentComponent},
    {path: '**', component: PageNoteFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}

