describe('Sudoku', () => {
  context('without time control', () => {
    before(() => {
      cy.visit('/')
    })

    it('shows the board and the timer', () => {
      cy.get('.game').should('be.visible')
      cy.contains('.status__time', '00:03')
    })
  })
})
