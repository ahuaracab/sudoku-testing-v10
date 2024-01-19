/// <reference types="cypress"/>
import React from 'react'
import { Difficulty } from './Difficulty'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'

describe('Difficulty', () => {
    it('changes the difficulty level', () => {
        cy.mount(
            <SudokuContext.Provider
                value={{
                    difficulty: 'Easy',
                }}
            >
                <div className="innercontainer">
                    <section className="status">
                        <Difficulty onChange={cy.stub().as('change')} />
                    </section>
                </div>
            </SudokuContext.Provider>,
        )

        cy.get('select').should('have.value', 'Easy').select('Hard')
        cy.get('select').should('have.value', 'Hard')
        cy.get('@change')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.target.value')
            .should('equal', 'Hard')
    })
})
