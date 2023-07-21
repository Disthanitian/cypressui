/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/utility/its')
    )
    
    it('[TEST]', () => {
        cy.get('ul li') // this yields us a jquery object
        .its('length') // calls 'length' property returning that value
        .should('be.gt', 2) // ensure the length is greater than 2
    })
  })