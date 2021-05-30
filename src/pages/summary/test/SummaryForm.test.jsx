import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import SummaryForm from '../SummaryForm'
const {default: userEvent} = require('@testing-library/user-event')

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
  userEvent.click(checkbox)
    expect(button).toBeEnabled()

     //click checkbox
     userEvent.click(checkbox)
    expect(button).not.toBeEnabled()
  })
})

test('popover responds to hover', async () => {
  render(<SummaryForm />)

  // popover starts out hidden
  // negative test start green bc assertion is not there
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
  expect(nullPopover).toBeNull()

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)
  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
)
})