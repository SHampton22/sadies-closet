describe('Outfit', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:5500/api/v1/clothes', { fixture: 'clothes' })
    cy.visit('http://127.0.0.1:5173/closet')
    cy.get('.closet-img').eq(1).click()
    cy.get('.closet-img').eq(2).click()
    cy.get('a.nav-outfit').click()
  })

  it('should be on the outfit page', () => {
    cy.url().should('include', '/outfit')
  })

  it('should see the name of the application', () => {
    cy.get('h1').contains(`Sadie's Closet`)
  })

  it('should see two links in the navagation bar', () => {
    cy.get('a.nav-hanger').contains('my clothes')
    cy.get('a.nav-outfit').contains('my outfit')
  })

  it('should see the title of the page', () => {
    cy.get('.outfit-title').contains('my next outfit!')
  })

  it('should see the top and bottom selected', () => {
    cy.get('.outfit-top > .outfit-img')
    cy.get('.outfit-bottom > .outfit-img')
  })

  it('should be able to clear the current outfit', () => {
    cy.get('.clear-outfit').click()
    cy.get('.outfit-top > .outfit-img').should('not.be.visible')
    cy.get('.outfit-bottom > .outfit-img').should('not.be.visible')
  })

  it('should be able to click the app name to go back to the closet', () => {
    cy.get('h1').click()
    cy.url().should('include', '/closet')
  })

  it('should be able to click the my clothes link to go back to the closet', () => {
    cy.get('a.nav-hanger').click()
    cy.url().should('include', '/closet')
  })

})