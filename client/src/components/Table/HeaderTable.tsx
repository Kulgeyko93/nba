import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { HeaderCell } from './HeaderCell';

type TProps = {
  titles: string[];
};

export const HeaderTable = ({ titles }: TProps) => {
  return (
    <TableRow>
      {titles.map((cell: string, index: number) => (
        <TableCell key={index}>
          <HeaderCell cellValue={cell} index={index} />
        </TableCell>
      ))}
    </TableRow>
  );
};
