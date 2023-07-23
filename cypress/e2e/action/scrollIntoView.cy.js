/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('https://docs.cypress.io/api/commands/scrollTo')
    )

    it('[TEST] Scroll to view', () => {
        cy.get('#Notes').scrollIntoView() 
    })

    it('[TEST] Scroll to view with duration', () => {
        cy.get('#Notes').scrollIntoView({ duration: 2000 }) 
    })
    
  })