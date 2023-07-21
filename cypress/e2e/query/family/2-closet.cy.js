/// <reference types="cypress" />

describe('3. Test Closet', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000')
    )

    it('test', () =>{
        cy.get('ul')
        .closest('li')
        .first()
        .contains('About')
    })
})