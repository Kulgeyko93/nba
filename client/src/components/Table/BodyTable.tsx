import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { ITeamStats } from '../../interfaces&types/interfaces';

type TProps = {
  data: ITeamStats;
  number: number;
};

export const BodyTable = ({ data, number }: TProps) => {
  const titleCells: Array<string | number> = [];

  const setTitleCells = (sellsData: any) => {
    for (let item in sellsData) {
      titleCells.push(sellsData[item]);
    }
  };

  setTitleCells(data);

  return (
    <TableRow>
      <TableCell>{number + 1}</TableCell>
      {titleCells.map((cell: any, index: any) => (
        <TableCell key={index}>{cell}</TableCell>
      ))}
    </TableRow>
  );
};
