/**
 * @jest-environment jsdom
 */

import {screen, render} from '@testing-library/react'
import {Event} from '../CreateEvent'

describe('rendering form', ()=>{
    test('check text',() => {
        render(<Event/>)
        const formFields = screen.getByTitle('App Root');
        expect(formFields).toBeInTheDocument();
    })
})