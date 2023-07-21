/// <reference types="cypress" />

describe('2. Test Children', () => {
    beforeEach(() =>
        cy.visit('localhost:3000/query/family/parent')
    )

    it('Check Parent Class equals to secondary-nav', () => {
        cy.get('ul.secondary-nav')
        .children()
        .parent()
        .should('have.class', 'secondary-nav')
    })

    it('Service Parent has 1 child', () => {
        cy.get('ul.secondary-nav')
        .children()
        .parent()
        .parent()
        .should('have.length', '1')
    })
})