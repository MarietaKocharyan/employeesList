import { useMemo } from 'react';

import { Tooltip, Typography } from '@mui/material';
import { GridColDef, DataGridProps as MuiDataGridProps, GridRenderCellParams } from '@mui/x-data-grid';

import { StyledDataGrid } from './styled';

interface DataGridCustomProps {
    columns?: Record<string, string>;
    multiselectColumns?: string[];
}

type DataGridProps = Omit<MuiDataGridProps, 'columns'> & DataGridCustomProps;

const DataGrid = ({ columns, multiselectColumns, ...props }: DataGridProps): JSX.Element => {
    const gridCols: GridColDef[] = useMemo(
        () =>
            Object.entries(columns).map(
                ([field, headerName]: string[]): GridColDef => ({
                    field,
                    flex: 1,
                    minWidth: 120,
                    headerName: headerName,
                    sortable: !(multiselectColumns && multiselectColumns.includes(field)),
                    renderCell: (params: GridRenderCellParams): JSX.Element => (
                        <Tooltip title={params.value || ''}>
                            <Typography noWrap>{params.value}</Typography>
                        </Tooltip>
                    ),
                })
            ),
        [columns, multiselectColumns]
    );

    return <StyledDataGrid {...props} columns={gridCols} />;
};

DataGrid.defaultProps = {
    rows: [],
    rowHeight: 56,
    autoHeight: true,
    rowBuffer: 6,
    columnBuffer: 3,
    disableColumnMenu: true,
    disableColumnSelector: true,
    disableDensitySelector: true,
};

export default DataGrid;
