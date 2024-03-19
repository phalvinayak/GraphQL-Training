import { useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import cn from 'classnames';

function UxTable({ columns, data, theadClassName, tbodyClassName }) {
    const headers = useMemo(
        () =>
            columns.map((column) => (
                <th key={column.key} className={cn(column.headerClassName)}>
                    {column.title}
                </th>
            )),
        [columns]
    );

    const rows = useMemo(
        () =>
            data.map((row, index) => {
                return (
                    <tr key={`row-${index}`}>
                        {columns.map((column) => {
                            const value = column.render
                                ? column.render(row)
                                : row[column.key];
                            return (
                                <td
                                    key={`cell-${column.key}-${row.id}`}
                                    className={cn(column.bodyClassName)}
                                >
                                    {value}
                                </td>
                            );
                        })}
                    </tr>
                );
            }),
        [columns, data]
    );

    return (
        <Table striped hover>
            <thead className={cn(theadClassName)}>
                <tr>{headers}</tr>
            </thead>
            <tbody className={cn(tbodyClassName)}>{rows}</tbody>
        </Table>
    );
}

export default UxTable;
