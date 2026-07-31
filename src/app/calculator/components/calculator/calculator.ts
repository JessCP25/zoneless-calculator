import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
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

  handleClick(key: string){
    console.log({key})
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.handleClick(event.key);
  }
}
