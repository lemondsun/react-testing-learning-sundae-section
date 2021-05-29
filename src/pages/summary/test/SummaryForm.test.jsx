import { render, fireEvent, screen } from '@testing-library/react'
import SummaryForm from '../SummaryForm'
describe('How the checkbox opperates', () => {

  test('checkbox default state', () => {
    render(<SummaryForm />)
    // get checkbox from summary page
    const checkbox = screen.getByRole('checkbox', { name: /I agree to Terms and Conditions/i })
    expect(checkbox).not.toBeChecked()


  })

  test('checkbox enabales button and disables button', () => {
    render(<SummaryForm />)
    // get checkbox from summary page
    const checkbox = screen.getByRole('checkbox', { name: /I agree to Terms and Conditions/i })
    const button = screen.getByRole('button', {name: /Confirm order/i})
    
    //click checkbox
    fireEvent.click(checkbox)
    expect(button).toBeEnabled()

     //click checkbox
    fireEvent.click(checkbox)
    expect(button).not.toBeEnabled()
  })
})