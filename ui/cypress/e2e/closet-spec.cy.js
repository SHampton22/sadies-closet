describe('Closet', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://sadies-closet-api.vercel.app/api/v1/clothes', { fixture: 'clothes' })
    cy.visit('http://127.0.0.1:5173/')
  })

  it('should see the name of the application', () => {
    cy.get('h1').contains(`Sadie's Closet`)
  })

  it('should see two links in the navagation bar', () => {
    cy.get('a.nav-hanger').contains('my clothes')
    cy.get('a.nav-outfit').contains('my outfit')
  })

  it('should see directions', () => {
    cy.get('p').contains('Click a top and bottom to create your outfit!')
  })

  it('should be able to see all clothes without filtering',() => {
    cy.get('.closet-section').find('.closet-img').should('have.length', 4)
  })

  it('should be able to filter clothes', () => {
    cy.get('#filterClothes').select('Bottoms')
    cy.get('.closet-section').find('.closet-img').should('have.length', 2)
  })

  it('should be able to add a top and bottom to the outfit page', () => {
    cy.get('.closet-img').eq(1).click()
    cy.get('.closet-img').eq(2).click()
    cy.get('a.nav-outfit').click()
  })

})