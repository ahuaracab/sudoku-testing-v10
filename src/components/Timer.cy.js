/// <reference types="cypress" />
import React from 'react'
import { Timer } from './Timer'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Timer', () => {
  it('counts seconds', () => {
    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: new Date() }}>
        <div className="innercontainer">
          <section className="status">
            <Timer />
          </section>
        </div>
      </SudokuContext.Provider>,
    )
    cy.contains('.status__time', '00:00')
    cy.contains('.status__time', '00:01')
    cy.contains('.status__time', '00:02')
    cy.contains('.status__time', '00:03')
  })

  it('controls the clock', () => {
    // cy.clock and cy.tick do not work with component testing yet
    cy.clock()
    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: new Date() }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>,
    )
    cy.contains('.status__time', '00:00')
    cy.tick(30_000)
  })
})
