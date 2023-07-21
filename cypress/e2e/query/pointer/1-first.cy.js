/// <reference types="cypress" />

describe('1. Test First', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/first')
    )
  
    it('Test', () =>{
        cy.get('li').first()
    })
  
  })