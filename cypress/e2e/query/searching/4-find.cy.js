/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/searching/find')
    )
    
    it('[TEST]', () => {
        // yields [<li class="first"></li>, <li class="second"></li>]
        cy.get('#parent').find('li')
    })
  })