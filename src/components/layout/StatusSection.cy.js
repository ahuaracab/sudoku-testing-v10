/// <reference types="cypress"/>
import React from 'react'
import { StatusSection } from './StatusSection'
import '../../App.css'
import { SudokuContext } from '../../context/SudokuContext'

describe('StatusSection', () => {
    it('changes modes', () => {
        cy.mount(
            <SudokuContext.Provider
                value={{
                    difficulty: 'Medium',
                }}
            >
                <div className="innercontainer" style={{ paddingTop: '30px' }}>
                    <StatusSection onChange={cy.stub().as('change')} />
                </div>
            </SudokuContext.Provider>,
        )
        cy.get('.status__action-mistakes-mode input').should('not.be.checked')
        cy.get('.status__action-mistakes-mode').click()
        cy.get('.status__action-mistakes-mode input').should('be.checked')

        cy.get('.status__action-fast-mode input').should('not.be.checked')
        cy.get('.status__action-fast-mode').click()
        cy.get('.status__action-fast-mode input').should('be.checked').wait(1000, { log: false })

        //cy.viewport(669, 669)
        cy.screenshot('StatusSection - 1')
        cy.viewport(290, 500)
        cy.screenshot('StatusSection - 2')

    })
})
