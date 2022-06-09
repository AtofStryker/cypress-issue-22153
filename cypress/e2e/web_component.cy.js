describe('web component snapshot replay', () => {
  it('mounts a web component', () => {
    // snapshot has 'I am header' greater than 1 but should be 'I am header 1'
    cy.visit('cypress/fixtures/web-component.html')
    // snapshot has 'I am header' greater than 1 but should be 'I am header 1'
    cy.wait(100)
    // snapshot has has 'I am header' greater than 1 but should be 'I am header 1'
    cy.get('#element')
  })
})