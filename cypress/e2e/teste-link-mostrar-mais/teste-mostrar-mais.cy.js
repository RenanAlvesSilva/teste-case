describe('Teste button mostrar mais/mostrar menos', () => {
  it('Testando button para verificar mostrar mais/mostrar menos', () => {
    cy.visit('https://metro-uptime-sbw5.vercel.app/')

    
    cy.get('button').contains('Mostrar mais').click()
    .should('have.text', 'Mostrar menos')

    cy.get('button').contains('Mostrar menos').click()
    .should('have.text', 'Mostrar mais')

  })
})