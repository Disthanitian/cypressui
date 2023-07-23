/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('https://www.google.com')
    )

    it('[TEST] Click Google', () => {
        cy.get('#SIvCob > a').click()
        cy.get('#APjFqb').type('Hello World 1')
        cy.get('#APjFqb').clear()
        cy.get('#APjFqb').type('Hello World 2')
        cy.get('#APjFqb').clear()
    })
    
  })