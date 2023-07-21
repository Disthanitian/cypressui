/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/utility/hash')
    )
    
    it('[TEST]', () => {
        cy.get('#users li').find('a').click()
        cy.hash().should('match', /users\/.+$/) // => true
    })
  })