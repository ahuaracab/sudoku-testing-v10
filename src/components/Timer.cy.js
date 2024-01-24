/// <reference types="cypress"/>
import React from 'react'
import { Timer } from './Timer'
import '../App.css'
import { SudokuProvider, SudokuContext } from '../context/SudokuContext'
import moment from 'moment'


describe('Timer', () => {

  it('sets the clock to the given value', () => {
    const now = moment()
    const future = now.clone().add(700, 'seconds')
    cy.clock(future.toDate())
    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted: now }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>
    )

    cy.contains('11:40')
  })

})
