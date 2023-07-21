/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/searching/filter')
    )
    
    it('[TEST]', () => {
        // yields <li>About</li>
        cy.get('ul').find('>li').filter('.active')
    })
  })