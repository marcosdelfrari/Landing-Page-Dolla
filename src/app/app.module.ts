import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForcaComponent } from './pages/forca/forca.component';
import { SectionComponent } from './components/section/section.component';
import { AnimationHeadComponent } from './components/animation-head/animation-head.component';
import { AnimationTvComponent } from './components/animation-tv/animation-tv.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LetreiroComponent } from './components/letreiro/letreiro.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { HeaderComponent } from './components/home/header/header.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ServicosComponent } from './components/home/servicos/servicos.component';
import { ProductComponent } from './components/home/product/product.component';
import { FooterHomeComponent } from './components/home/footer-home/footer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ForcaComponent,
    SectionComponent,
    AnimationHeadComponent,
    AnimationTvComponent,
    FooterComponent,
    CategoriasComponent,
    LetreiroComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    BannerComponent,
    ServicosComponent,
    ProductComponent,
    FooterHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
