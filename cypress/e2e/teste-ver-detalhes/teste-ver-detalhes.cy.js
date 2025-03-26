describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://metro-uptime-sbw5.vercel.app/')

    cy.get('button').contains('Ver detalhes').click()
    

    cy.get('button').contains('Estações').click()
    .should('have.attr', 'data-state', 'active')

    cy.get('button').contains('Relatório de usuário').click()
    .should('have.attr', 'data-state', 'active')

    cy.get('button').contains('Back').click()
  })
})