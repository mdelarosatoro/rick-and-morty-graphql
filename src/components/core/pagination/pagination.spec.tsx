import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './pagination';

describe('Given the Pagination component', () => {
    describe('When called to render with page, numOfPages and handleClick fn', () => {
        test('It should render itself, showing the page, numOfPages and calling fn on click', () => {
            const testPage = 1;
            const testNumOfPages = 4;
            const testHandleClick = jest.fn();
            render(
                <Pagination
                    page={testPage}
                    numOfPages={testNumOfPages}
                    handleClick={testHandleClick}
                />
            );
            expect(
                screen.getByText(`Page: ${testPage} of ${testNumOfPages}`)
            ).toBeInTheDocument();
        });
    });
    describe('When clicking the next and prev buttons', () => {
        test('It should call handleClick', () => {
            const testPage = 1;
            const testNumOfPages = 4;
            const testHandleClick = jest.fn();
            render(
                <Pagination
                    page={testPage}
                    numOfPages={testNumOfPages}
                    handleClick={testHandleClick}
                />
            );
            userEvent.click(screen.getByText('Next'));
            expect(testHandleClick).toHaveBeenCalledTimes(1);
            userEvent.click(screen.getByText('Prev'));
            expect(testHandleClick).toHaveBeenCalledTimes(2);
        });
    });
});
