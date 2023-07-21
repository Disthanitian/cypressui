/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/utility/as')
    )
    
    it('[TEST]', () => {
        cy.get('input[type=submit]').as('submitBtn')
        cy.get('@submitBtn').should('be.disabled')
    })
  })