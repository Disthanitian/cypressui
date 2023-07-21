/// <reference types="cypress" />

describe('1. Test Get', () => {
  beforeEach(() =>
    cy.visit('localhost:3000')
  )

  it('test', () => {
    cy.get('#comparison')
      .get('div')
      // finds the div.test-title outside the #comparison
      // and the div.feature inside
      .should('have.class', 'test-title')
      .and('have.class', 'feature')
    cy.get('#comparison')
      .find('div')
      // the search is limited to the tree at #comparison element
      // so it finds div.feature only
      .should('have.length', 1)
      .and('have.class', 'feature')
  })
})