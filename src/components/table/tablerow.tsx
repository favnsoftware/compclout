import React, { FC } from 'react'

type TableRowTypes = {
    /**
     * Table row content
     */
    children: React.ReactNode;
}

export const TableRow: FC<TableRowTypes> = ( { children } ) => {

    return (
        <tr>
            { children }
        </tr>
    )
};
