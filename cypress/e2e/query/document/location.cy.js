/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/document/document')
    )
    
    it('[TEST]', () => {
        cy.location() // Get location object
        cy.location('host') // Get the host of the location object
        cy.location('port') // Get the port of the location object
    })
  })