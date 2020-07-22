import React, { FC } from 'react'

type TableBodyTypes = {
    /**
     * Body components
     */
    children: React.ReactNode;
}

export const TableBody: FC<TableBodyTypes> = ( { children } ) => {

    return (
        <tbody>
            { children }
        </tbody>
    )
};
