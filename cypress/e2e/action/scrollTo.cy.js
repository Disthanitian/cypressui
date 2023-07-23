/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('https://docs.cypress.io/api/commands/scrollTo')
    )

    it('[TEST] Scroll to bottom', () => {
        cy.scrollTo('bottom')
    })

    it('[TEST] Scroll down 1000px and Up', () => {       
        cy.scrollTo(0, 1000)
    })   

    it('[TEST] Scroll down 1000px and Up', () => {       
        cy.scrollTo('bottom')
        cy.wait(5000)
        cy.scrollTo('top')
    })   
    
  })