/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('https://www.google.com')
    )

    it('[TEST] Click Google', () => {
        cy.get('#SIvCob > a').click()
        cy.get('#APjFqb').type('Hello World')
        cy.get('ul').children().first().click()
    })
    
  })