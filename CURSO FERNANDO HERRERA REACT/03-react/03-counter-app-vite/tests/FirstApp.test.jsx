import { render } from '@testing-library/react'
import { TestEnvironment } from 'jest-environment-jsdom';
import FirstApp from '../src/FirstApp';




describe('Pruebas en <FirstApp />', () => { 
    
    /* test('Debe hacer match con el snapshot ', () => {
        
const title = 'hola soy Vegeta';
const subtitle = 'Principe Saijajin'
const { container } =  render (<FirstApp title={title} subtitle={ subtitle}/>)

expect( container ).toMatchSnapshot();

    }); */

   test('Debe mostrar el titulo en un H1 ', () => {
     
    const title = 'hola soy Vegeta';
    const subtitle = 'Principe Saijajin'
    const { container, getByText, getByTestId } =  render (<FirstApp title={title} subtitle={ subtitle}/>)
expect(getByText(title)).toBeTruthy;
/* const h1 = container.querySelector('h1')
console.log(h1.innerHTML)
expect(h1.innerHTML).toContain(title) */

expect(getByTestId('test-title').innerHTML).toContain(title);


   });
   test('Debe mostrar el subitulo por props', () => {

 
    const title = 'hola soy Vegeta';
    const subtitle = 'Principe Saijajin'
    const {  getByText, getAllByText } =  
    render (
    <FirstApp 
    title={title} 
    subtitle={ subtitle}/>
    )
expect(getByText(subtitle)).toBeTruthy;// tener en cuenta que el getByText 
                                        //solo funciona si hay solo una etiqueta
  


   })
 })