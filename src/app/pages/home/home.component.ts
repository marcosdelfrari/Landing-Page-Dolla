import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMobile: boolean | undefined;


  constructor() {
    this.checkScreenWidth(); // Verifique o tamanho da tela inicialmente
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.checkScreenWidth(); // Verifique o tamanho da tela sempre que a janela for redimensionada
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768; // Defina a largura de acordo com sua definição de "mobile"
  }
}
