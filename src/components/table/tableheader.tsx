import React, { FC } from 'react'
import styles from './table.module.css'

type TableHeaderTypes = {
    /**
     * Header-row content
     */
    children: React.ReactNode;
}


export const TableHeader: FC<TableHeaderTypes> = ( { children } ) => {

    return (
        <thead className='bg-gray-100'>
            { children }
        </thead>
    )
};
