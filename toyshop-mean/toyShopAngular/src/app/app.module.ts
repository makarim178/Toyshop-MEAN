import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SharedBodyComponent } from './components/shared/shared-body/shared-body.component';
import { SearchFiltersComponent } from './components/func-components/search-filters/search-filters.component';
import { ProductsListComponent } from './components/func-components/products-list/products-list.component';
import { ProductItemComponent } from './components/func-components/product-item/product-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyInfoComponent } from './components/shared/header/company-info/company-info.component';
import { NavComponent } from './components/shared/header/nav/nav.component';
import { CartMenuComponent } from './components/shared/header/cart-menu/cart-menu.component';
import { UserMenuComponent } from './components/shared/header/user-menu/user-menu.component';
import { EmailFormComponent } from './components/shared/shared-body/email-form/email-form.component';
import { SitemapsComponent } from './components/shared/shared-body/sitemaps/sitemaps.component';
import { HelpComponentComponent } from './components/shared/shared-body/help-component/help-component.component';
import { FuncComponentsComponent } from './components/func-components/func-components.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { PageNoteFoundComponent } from './components/shared/page-note-found/page-note-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SingleProductComponent } from './components/func-components/single-product/single-product.component';
import { TpcomponentComponent } from './components/tpcomponent/tpcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SharedBodyComponent,
    SearchFiltersComponent,
    ProductsListComponent,
    ProductItemComponent,
    CompanyInfoComponent,
    NavComponent,
    CartMenuComponent,
    UserMenuComponent,
    EmailFormComponent,
    SitemapsComponent,
    HelpComponentComponent,
    FuncComponentsComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    PageNoteFoundComponent,
    AboutusComponent,
    ContactusComponent,
    SingleProductComponent,
    TpcomponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
