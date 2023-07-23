/// <reference types="cypress" />

describe('[TEST]', ()=>{
    beforeEach(() => 
        cy.visit('localhost:3000/action/action/selectFile')
    )

    it('[TEST]', () => {
        cy.get('input[type=file]').selectFile('C:\\Users\\proov\\Documents\\GitHub\\cypressui\\cypress\\e2e\\action\\selectFile.cy.js')
    })
  })