/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/searching/eq')
    )
    
    it('[TEST]', () => {
        cy.get('tr').eq(2).should('contain', 'Canada') //true
    })
  })