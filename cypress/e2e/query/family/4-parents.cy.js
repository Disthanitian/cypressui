/// <reference types="cypress" />

describe('2. Test Children', () => {
    beforeEach(() =>
        cy.visit('localhost:3000/query/family/parents')
    )

    it('Check Parent Class equals to secondary-nav', () => {
        cy.get('ul.secondary-nav')
        .children()
        .parents()
        .first()
        .should('have.class', 'secondary-nav')
    })

    it('Service Parent has 1 child', () => {
        cy.get('ul.secondary-nav')
        .children()
        .parent()
        .parents()
        .first()
        .should('have.length', '1')
    })

    it('Search Parents', () => {
        cy.get('li.active').parents('.main-nav').should('have.class', 'main-nav')
    })
})