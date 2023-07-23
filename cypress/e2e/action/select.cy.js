/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/action/action/select')
    )

    it('[TEST]', () => {
        // yields <option value="456">apples</option>
        cy.get('select').select('apples').should('have.value', '456')
    })
  })