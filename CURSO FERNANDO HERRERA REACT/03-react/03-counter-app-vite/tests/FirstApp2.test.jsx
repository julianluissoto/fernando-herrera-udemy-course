import { render, screen } from '@testing-library/react'

import FirstApp from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => { 
    
   const title= 'hola soy goku'
   const subtitle='Principe Saijajin'
test('should match with the snapshot ', () => {
    
    const {container} = render(<FirstApp title={title} />)

    expect(container).toMatchSnapshot();
});


test('should show message "hola, Soy Goku "', () => {
    
     render(<FirstApp title={title} />)
expect(screen.getByText( title )).toBeTruthy();
//screen.debug()

});

test('should show the title on an h1 tag ', () => {
    render(<FirstApp title={title} />)

    expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);


});
test('should show the subtitle send by props', () => { 
    render(<FirstApp title={title} subtitle={subtitle}/>)
    expect(screen.getAllByText( subtitle ).length).toBe(1);
 })

 })