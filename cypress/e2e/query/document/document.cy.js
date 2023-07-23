/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/document/document')
    )
    
    it('[TEST]', () => {
        cy.document().its('contentType').should('eq', 'text/html')
    })
  })