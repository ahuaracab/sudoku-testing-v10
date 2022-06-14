/// <reference types="cypress" />

import { init, solved } from '../fixtures/sudoku.json'

it('plays the same game', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      win.starting = init
      win.solved = solved
    },
  })

  // use bundled Lodash library to transform and process the data
  const emptyCells = Cypress._.filter(init, (cell) => cell === '0').length
  // use cy.get(...:contains(text)) to select multiple elements with text
  cy.get('.game__cell:contains(0)').should('have.length', emptyCells)

  // play each empty square
  init.forEach((cell, index) => {
    if (cell === '0') {
      cy.get('.game__cell').eq(index).click()
      cy.contains('.status__number', solved[index]).click().wait(1000)
      cy.get(`.game__cell--selected:contains(${solved[index]})`).should(
        'have.length',
        8,
      )
    }
  })

  cy.contains('.overlay__text', 'You solved it').should('be.visible')
})
