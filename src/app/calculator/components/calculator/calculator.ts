import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButton } from "../calculator-button/calculator-button";

@Component({
  selector: 'calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styles: `
  //   @reference "../../../../styles.css";

  //   .is-command{
  //     @apply bg-indigo-700/10 text-2xl;
  //   }
  // `
})
export class Calculator {}
