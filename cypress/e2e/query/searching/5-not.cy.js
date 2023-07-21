/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/searching/not')
    )
    
    it('[TEST]', () => {
        cy.get('ul>li').not('.active').should('have.length', 4) // true
    })
  })