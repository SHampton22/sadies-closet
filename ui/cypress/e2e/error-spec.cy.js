describe('Error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:5500/api/v1/clothes', { fixture: 'clothes' })
    cy.visit('http://127.0.0.1:5173/sarah')
  })

  it('should see the name of the application', () => {
    cy.get('h1').contains(`Sadie's Closet`)
  })

  it('should see two links in the navagation bar', () => {
    cy.get('a.nav-hanger').contains('my clothes')
    cy.get('a.nav-outfit').contains('my outfit')
  })

  it('should display an error message', () => {
    cy.get('h2').contains('Oops!')
    cy.get('p').contains('Sorry, an unexpected error has occurred.')
  })

  it('should be able to click the app name to go back to the closet', () => {
    cy.get('h1').click()
    cy.url().should('include', '/')
  })

  it('should be able to click the my clothes link to go back to the closet', () => {
    cy.get('a.nav-hanger').click()
    cy.url().should('include', '/')
  })

  it('should be able to click the my outfit link to go back to the outfit', () => {
    cy.get('a.nav-outfit').click()
    cy.url().should('include', '/outfit')
  })
  
})