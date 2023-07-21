/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/parentUntil')
    )
    
    it('[TEST]', () => {
        // yields [ul.menu, li]
        cy.get('.active').parentsUntil('.nav')
    })
  })