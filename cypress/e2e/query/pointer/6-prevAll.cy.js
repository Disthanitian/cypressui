/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/prevAll')
    )
    
    it('[TEST] Test PREVALL', () => {
        // yields [<li>apples</li>, <li>oranges</li>]
        cy.get('.third').prevAll()
    })
  })