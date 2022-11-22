describe('Sudoku', () => {
  it('controls the clock', () => {
    cy.clock()
    cy.visit('/')
    // make sure the game has fully loaded
    cy.wait(100)
    cy.contains('.status__time', '00:00')
    cy.tick(30_000)
    cy.contains('.status__time', '00:30')
    cy.tick(30_000)
    cy.contains('.status__time', '01:00')
  })
})
