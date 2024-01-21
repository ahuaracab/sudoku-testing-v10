/// <reference types="cypress"/>
import React from 'react'
import { Overlay } from './Overlay'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'


describe('Overlay', () => {

  it('is invisible', () => {
    cy.mount(
      <Overlay onClickOverlay={cy.stub().as('click')} />
    )
    //cy.get('.overlay').should('not.be.visible').click({ force: true })
    //cy.get('.overlay').should('not.be.visible').invoke('click')
    cy.get('.overlay').should('not.be.visible')
  })

  it('is visible and clickeable', () => {
    cy.mount(
      <Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />
    )
    cy.get('.overlay').should('be.visible').click()
    cy.get('@click').should('have.been.called')
  })

})
