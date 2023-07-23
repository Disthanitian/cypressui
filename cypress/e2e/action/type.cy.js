/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('https://www.google.com')
    )

    it('[TEST] Type input', () => {
        cy.get('#APjFqb').type('Hello World')
    })
    
  })