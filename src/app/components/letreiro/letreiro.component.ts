import { Component } from '@angular/core';

@Component({
  selector: 'app-letreiro',
  templateUrl: './letreiro.component.html',
  styleUrls: ['./letreiro.component.scss']
})
export class LetreiroComponent {
  phrases: string[] = [
    'SUA MARCA É aesthetic?',
    'QUAL A FORÇA DA SUA MARCA?',
  ];
  currentPhraseIndex = 0;
  currentText = '';

  ngOnInit(): void {
    this.typePhrase();
  }

  typePhrase(): void {
    const phrase = this.phrases[this.currentPhraseIndex];
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index === phrase.length) {
        clearInterval(typingInterval);
        setTimeout(() => this.changePhrase(), 1500);
      } else {
        this.currentText += phrase.charAt(index);
        index++;
      }
    }, 100);
  }

  changePhrase(): void {
    this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
    this.currentText = '';
    this.typePhrase();
  }
}
