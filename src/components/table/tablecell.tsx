import React, { FC } from 'react'

type TableCellTypes = {
    /**
     * Cell content
     */
    children: React.ReactNode;
}

export const TableCell: FC<TableCellTypes> = ( { children } ) => {

    return (
        <td className='p-3'>
            { children }
        </td>
    )
};
