describe('Testando tela de login', () => {
  it('Teste tela de login acessando e fazendo login', () => {
    cy.visit('https://metro-uptime-sbw5.vercel.app/')

    cy.get('a[href="/admin"]').click()

    cy.get('input[type="password"]')
    .type('123456')
    .should('have.value', '123456')

    cy.get('button[type="submit"]').click()
    .should('be.disabled')

    cy.get('a[href="/"]').click()
  })
})

