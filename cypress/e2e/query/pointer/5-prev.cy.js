/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/prev')
    )
    
    it('[TEST] Test PREV', () => {
      cy.get('.active').prev()
      cy.get('li').prev('.active')
    })
  })