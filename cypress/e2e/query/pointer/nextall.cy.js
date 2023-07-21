/// <reference types="cypress" />

describe('5. Test Siblings', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/nextAll')
    )
    
    it('[NEXTALL] Test NEXTALL', () => {
      cy.get('.second').nextAll()
    })
  })