/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/utility/root')
    )
    
    it('[TEST]', () => {
        cy.root() // Yield root element <html>
        cy.get('.nav').within(($nav) => {
          cy.root() // Yield root element <nav>
        })
    })
  })