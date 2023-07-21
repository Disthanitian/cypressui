/// <reference types="cypress" />

describe('5. Test Siblings', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/query/family/siblings')
    )

    it('Test Number of sibling', () =>{
        cy.get('.active')
        .siblings()
        .should('have.length', 3)
    })

    it('Test sibling by option', () =>{
        cy.get('li')
        .siblings('.active')
        .should('have.length', 1)
    })
})