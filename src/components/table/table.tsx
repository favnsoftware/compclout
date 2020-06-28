import React, { FC } from 'react'
import styles from './table.module.css'

type TableTypes = {
    /**
     * Table components
     */
    children: React.ReactNode;
    /**
     * Border
     */
    celled: boolean;
}


export const Table: FC<TableTypes> = ( { children, celled = true } ) => {

    return (
        <table className={`${styles.table} ${celled ? styles.celled : ''}`}>
            { children }
        </table>
    )
};

