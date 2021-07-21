import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

describe('<Input />', () => {
    it('should render correctly', async () => {
        const screen = render(<Input />)
        const input = await screen.findByTestId('input-input')
        expect(input).toBeInTheDocument()
    })

    describe('if provided a label prop', () => {
        it('should show the label', async () => {
            const screen = render(<Input label="This is the label" />)
            const label = await screen.findByTestId("input-label")
            expect(label).toBeInTheDocument()
            expect(label.innerHTML).toBe("This is the label")
        })
    })

    describe('if provided an onInput handler', () => {
        it('should attach it to the input', async () => {
            const mockOnInput = jest.fn()
            const screen = render(<Input label="Label" onInput={mockOnInput} />)
            const input = await screen.findByTestId('input-input')
            userEvent.type(input, 'h')
            expect(mockOnInput).toHaveBeenCalledTimes(1)
        })
    })
})