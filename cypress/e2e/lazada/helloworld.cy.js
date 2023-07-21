/// <reference types="cypress"/>

describe('helloworld', ()=>{
    beforeEach(()=> {
        cy.visit('https://www.amazon.com/')
    })

    it('test click search button', () =>{
        cy.get('#twotabsearchtextbox').type('Peak Design')
        cy.get('#nav-search-submit-button').click()
        cy.get('.rush-component')
        .find('[data-cel-widget="search_result_2"]')
        .find('.rush-component > a')
        .click()

        cy.get('#add-to-cart-button', {timeout: 100000})
        .click()

        cy.get('#a-button-input', {timeout: 100000})
        .click()

    })
})
