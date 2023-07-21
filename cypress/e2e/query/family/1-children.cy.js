/// <reference types="cypress" />

describe('2. Test Children', () => {
    beforeEach(() =>
        cy.visit('localhost:3000')
    )

    it('test outer children', () => {
        cy.get('ul.secondary-nav')
        .children()
        .should('have.length', 3)
    })

    it('test inner children', () => {
        cy.get('ul.secondary-nav')
        .children()
        .last()
        .find('.tertiary-nav')
        .children()
        .should('have.length', 3)
    })

    it('test inner children without get', () => {
        cy.get('ul.secondary-nav')
        .children('.services-3')
        .children()
        .should('have.length', 1)
    })

    it('test inner children without get but check inner', () => {
        cy.get('ul.secondary-nav')
        .children('.services-3')
        .children()
        .first()
        .children()
        .should('have.length', 3)
    })
})