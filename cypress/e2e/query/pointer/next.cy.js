/// <reference types="cypress" />

describe('5. Test Siblings', ()=>{
  beforeEach(() => 
      cy.visit('localhost:3000/query/pointer/next')
  )

  it('[NEXT] Test Number of sibling', () =>{
    cy.get('#fruit option')
    .first()
    .should('have.text', 'Apple')
    .next()
    .should('have.text', 'Banana')
    .next()
    .should('have.text', 'Cantaloupe')
  })

  it('[NEXT] Text Next Selector', () =>{
    cy.get('li').next('.selected')
  })

})