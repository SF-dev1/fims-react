import * as React from 'react';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import doc from './linearProgressBar.mdx';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

type DataRow = {
    title: string;
    director: string;
    year: string;
};

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Director',
        selector: row => row.director,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

// data provides access to your row data
const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default function Tasks() {
    return <DataTable columns={columns} data={data} progressComponent={<LinearIndeterminate />} expandableRows expandableRowsComponent={ExpandedComponent} />;
}