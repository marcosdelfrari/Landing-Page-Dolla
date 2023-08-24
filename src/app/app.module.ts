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

@NgModule({
  declarations: [
    AppComponent,
    ForcaComponent,
    SectionComponent,
    AnimationHeadComponent,
    AnimationTvComponent,
    FooterComponent,
    CategoriasComponent,
    LetreiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
