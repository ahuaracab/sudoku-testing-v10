/// <reference types="cypress"/>

describe('Timer', () => {
  it('shows 10 seconds', () => {
    cy.visit('/')
    for (let j = 0; j < 10; j++) {
      cy.contains('.status__time', `00:0${j}`)
    }
  })
})