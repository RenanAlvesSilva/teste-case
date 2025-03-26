describe('Testando os imputs do botão reportar problema', () => {
  it('Testando o input textArea', () => {
    cy.visit('https://metro-uptime-sbw5.vercel.app/')
    
    cy.get('button').eq(0).click()
    cy.get('select')
    .select('2', {force: true})
    .should('have.value', '2')

    cy.get('select').eq(1)
    .select('27', {force:true})
    .should('have.value', '27')

    cy.get('button[value="delay"]')
    .click()
    .should('have.attr', 'data-state', 'checked')


    cy.get('#description')
    .type('Testando envio')
    .should('have.value', 'Testando envio')

    cy.get('button[type="submit"]')
    .click()
    .should('be.disabled')
    
  })
})