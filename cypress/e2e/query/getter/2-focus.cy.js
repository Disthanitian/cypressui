/// <reference types="cypress" />

describe('2. Test Focus', () => {
    beforeEach(() => 
        cy.visit('localhost:3000/query/getter/focus')
    )

    it('test', () => {
        cy.focused().should('have.value', 'aaa')
    })
})