import CounterApp from "../src/CounterApp";
import { render, screen } from '@testing-library/react'


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
        
    });

 })