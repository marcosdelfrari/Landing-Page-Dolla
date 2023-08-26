import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = [

    {
      title: 'Websites',
      topics: [
        'Design Responsivo',
        'Otimização de Performance',
        'SEO',
        'Amigável ao Usuário',
      ],
    },
    {
      title: 'Comunicação',
      topics: [
        'Atendimento ao Cliente',
        'Pesquisa de Usuários',
        'Design Thinking',
        'Presença de marca',
      ],
    },
    {
      title: 'Tráfego Pago',
      topics: [
        'Google Ads',
        'Facebook Ads',
        'Estratégia de PPC',
        'Otimização de Campanhas',
      ],
    },
    {
      title: 'Páginas Únicas',
      topics: [
        'Otimização de Conversão',
        'Landing Pages',
        'Análises de dados',
        'Geração de Leads',
      ],
    },
    // ... outros produtos
  ];
}
