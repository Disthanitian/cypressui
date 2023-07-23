/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/document/title')
    )
    
    it('[TEST]', () => {
        cy.title().should('eq', 'This is Title')
    })
  })