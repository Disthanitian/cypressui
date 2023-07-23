/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/action/action/check')
    )

    it('[TEST] Checkbox', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('[TEST] Radio', () => {
        cy.get('[type="radio"]').check('US')
    })


    it('[TEST] UnCJeck Checkbox', () => {
        cy.get('[type="checkbox"]').uncheck() 
    })
    
    // This will error
    // it('[TEST] Uncheck Radio', () => {
    //     cy.get('[type="radio"]').uncheck('US')
    // })
    
  })