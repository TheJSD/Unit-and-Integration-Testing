import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should return 5 when 1 is added to 4', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should return 3 when 4 is subtracted from 7', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should return 15 when 3 * 5', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should return 3 when 21 / 7', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number clicks', () => {
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button2)
    fireEvent.click(button2)
    fireEvent.click(button2)
    fireEvent.click(button2)
    expect(runningTotal.textContent).toEqual('22222')
  })

  it('should be able to chain multiple operations together', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button2)
    fireEvent.click(buttonEquals)
    fireEvent.click(runningTotal)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonClear = container.getByTestId('clear');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonClear)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5')
  })
})