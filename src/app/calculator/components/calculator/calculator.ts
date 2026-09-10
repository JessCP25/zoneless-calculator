import { ChangeDetectionStrategy, Component, HostListener, viewChild, viewChildren } from '@angular/core';
import { CalculatorButton } from "../calculator-button/calculator-button";

@Component({
  selector: 'calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
  // styles: `
  //   @reference "../../../../styles.css";

  //   .is-command{
  //     @apply bg-indigo-700/10 text-2xl;
  //   }
  // `
})
export class Calculator {
  public calculatorButtons = viewChildren(CalculatorButton);

  handleClick(key: string){
    console.log({key})
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '='
    }

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue)
    });
  }
}
