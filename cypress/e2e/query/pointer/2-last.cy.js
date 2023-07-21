/// <reference types="cypress" />

describe('2. Test Last', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/pointer/last')
    )
  
    it('Test', () =>{
        cy.get('li').last()
    })
  
  })