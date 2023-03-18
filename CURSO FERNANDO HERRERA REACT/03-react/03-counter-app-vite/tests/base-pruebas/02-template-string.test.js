import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en 02-template-string', () => { 
test('get saludo de retornar Hola Julian', () => { 
    
    const name = 'Julian';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${ name }!!!`);

 
 })
})