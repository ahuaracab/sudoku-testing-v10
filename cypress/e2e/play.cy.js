/// <reference types="cypress"/>

import { starting, solved } from '../fixtures/sudoku.json'

describe('Sudoku', () => {
  it('plays the same game', () => {
    cy.visit('/')

    cy.readFile('cypress/fixtures/sudoku.json').then((sudokuData) => {
      cy.visit('/', {
        onBeforeLoad(win) {
          win.starting = sudokuData.starting;
          win.solved = sudokuData.solved;
        },
      });

      // Resto de tu prueba
      cy.get('.game__cell:contains(0)').should('have.length', 3);

      starting.forEach((cell, index) => {
        if (cell == 0) {
          cy.get('.game__cell').eq(index).click();
          cy.contains('.status__number', solved[index])
            .click()
            .wait(1000, { log: false });
        }
      });
    });
  })
})
