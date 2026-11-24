import { ComponentFixture, TestBed } from '@angular/core/testing';
import CalculatorView from './calculator-view';
import { Component, computed } from '@angular/core';

@Component({
  selector: 'calculator',
  template: `<div>MockCalculator</div>`
})
class MockCalculator {}

describe('CalculatorViewComponent', ()=> {
  let component: CalculatorView;
  let fixture: ComponentFixture<CalculatorView>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [CalculatorView]
    }).overrideComponent(CalculatorView,{
      set: {
        imports: [MockCalculator]
      }
    })

    fixture = TestBed.createComponent(CalculatorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should render the calculator component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    //console.log(compiled.innerHTML);
    expect(compiled.querySelector('calculator')).toBeTruthy();
  });

  it('Should contain the specific CSS classes in the wrapper div', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const divElement = compiled.querySelector('div');

    const expectedClasses = 'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(' ');

    expectedClasses.forEach(className =>{
      expect(divElement?.classList).toContain(className);
    })
  });

})
