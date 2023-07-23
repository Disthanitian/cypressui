/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/document/url')
    )
    
    it('[TEST]', () => {
        cy.url().should('include', '/query/document/url') // => true
        cy.url().should('eq', 'http://localhost:3000/query/document/url') // => true
    })
  })