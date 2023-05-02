import {render, screen, logRoles} from "../../../test-utils/testing-library-utils";
import SummaryForm from "../SummaryForm";

test('it should render a confirmation button', () => {
    const {container} = render(<SummaryForm />)
    const confirmButton = screen.getByRole('button', {name: /confirm order/i})
    expect(confirmButton).toBeInTheDocument()
    // logRoles(container)
})
