import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButton } from "../calculator-button/calculator-button";
import { CalculatorService } from '@/calculator/services/calculator';

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
  private calculatorService = inject(CalculatorService);

  public calculatorButtons = viewChildren(CalculatorButton);

  public resultText = computed(()=> this.calculatorService.resultText())
  public subResultText = computed(()=> this.calculatorService.subResultText())
  public lastOperator = computed(()=> this.calculatorService.lastOperator())

  // get resultText(){
  //   return this.calculatorService.resultText;
  // }

  handleClick(key: string){
    this.calculatorService.constructNumber(key);
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
