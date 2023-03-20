import CounterApp from "../src/CounterApp";
import { fireEvent, render, screen } from '@testing-library/react'


describe('TEST ON <CounterApp/>', () => { 

    const initialValue= 100

    test('should match with the snapshot ', () => {
    
        const {container} = render(<CounterApp value={initialValue} />)
          expect(container).toMatchSnapshot();
    });
    test('should match should show inital value 100 ', () => {
    
       render(<CounterApp value={initialValue}/>)
       expect(screen.getByText(100)).toBeTruthy()
         // otra forma seria asi, buscando en el nodo html
         //  expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(initialValue.toString());
    });
    test('shoul increment the counter on 1  ', () => {

        render(<CounterApp value={initialValue}/>)
        fireEvent.click( screen.getByText('+1') )
expect(screen.getByText(101)).toBeTruthy()
    });
    test('shoul decrement the counter on 1  ', () => {

        render(<CounterApp value={initialValue}/>)
        fireEvent.click( screen.getByText('-1') )
expect(screen.getByText(99)).toBeTruthy()
    });
    test('shoul reset the counter to the initial value  ', () => {

        render(<CounterApp value={50}/>)
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByRole("button",{name:'btn-reset'})) 
       expect(screen.getByText('50')).toBeTruthy()


    });

 })