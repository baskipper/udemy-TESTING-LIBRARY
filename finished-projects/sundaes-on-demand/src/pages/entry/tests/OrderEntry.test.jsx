import {render, logRoles, screen} from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";

test('displays the welcome element', () => {
    const {container} = render(<OrderEntry />)
    logRoles(container)
    const welcomeHeader = screen.getByRole('heading', {name: 'Design Your Sundae!'})
    expect(welcomeHeader).toBeInTheDocument()
})
