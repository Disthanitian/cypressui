/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/prevUntil')
    )
    
    it('[TEST] Test PREVUNTIL', () => {
        // yields [<li>cucumbers</li>, <li>carrots</li>, <li>corn</li>]
        cy.get('#nuts').prevUntil('#veggies')
    })
  })