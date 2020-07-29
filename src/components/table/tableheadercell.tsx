import React, { FC } from 'react'

type TableHeaderCellTypes = {
    /**
     * Header cell content
     */
    children: React.ReactNode;
}

export const TableHeaderCell: FC<TableHeaderCellTypes> = ( { children } ) => {

    return (
        <th className='p-4 text-left'>
            { children }
        </th>
    )
};
