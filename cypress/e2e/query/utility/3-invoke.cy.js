/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/utility/invoke')
    )
    
    it('[TEST]', () => {
        cy.get('.input').invoke('val').should('eq', 'foo') // Invoke the 'val' function
        cy.get('.modal').invoke('show') // Invoke the jQuery 'show' function
    })
  })