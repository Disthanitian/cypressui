/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/searching/contains')
    )
    
    it('[TEST] Test PREVUNTIL', () => {
        // yields input[type='submit'] element then clicks it
        cy.get('form').contains('submit the form!').click()
    })
  })