import React from 'react'
import { Table } from '../components/table'
import { TableHeader } from '../components/table/tableheader';
import { TableBody } from '../components/table/tablebody';
import { TableRow } from '../components/table/tablerow';
import { TableCell } from '../components/table/tablecell';
import  { TableHeaderCell } from '../components/table/tableheadercell';
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
    title: "Table",
    decorators: [withKnobs]
}



export const primary = () => {
    const children = 
    <><TableHeader><TableHeaderCell>Name</TableHeaderCell><TableHeaderCell>Age</TableHeaderCell><TableHeaderCell>Hometown</TableHeaderCell></TableHeader>
    <TableBody><TableRow><TableCell>Juni Leirvik</TableCell><TableCell>22</TableCell><TableCell>Kristiansand</TableCell></TableRow></TableBody></>
    const celled = boolean("Border", true)
    return (
        <Table 
            children = {children}
            celled = {celled}
        />
    )
};


