/* eslint-disable no-unused-vars */
import { SyntheticEvent } from 'react';

function Pagination({
    page,
    numOfPages,
    handleClick,
}: {
    page: number;
    numOfPages: number;
    handleClick: (e: SyntheticEvent) => void;
}) {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <p>
                Page: {page} of {numOfPages}
            </p>
            <div className="flex gap-2 items-center justify-center">
                <button
                    className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    type="button"
                    name="prev"
                    onClick={handleClick}
                >
                    Prev
                </button>
                <button
                    className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    type="button"
                    name="next"
                    onClick={handleClick}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;
