/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('https://webbrowsertools.com/test-right-click/')
    )

    it('[TEST] Click Google', () => {
        cy.get('#right-click tr')
        .eq(6)
        .find('td')
        .eq(1)
        .find('img')
        .rightclick()
    })
  })