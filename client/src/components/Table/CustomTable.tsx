/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Paper, Table, TableHead, TableContainer, TableBody } from '@material-ui/core';
import { tableTeamHeader, tableTeamStats } from '../../constants/table';
import { BodyTable } from './BodyTable';
import { HeaderTable } from './HeaderTable';
import { useSelector } from 'react-redux';

export const CustomTable = () => {
  const currentCellDirection: 'asc' | 'desc' | undefined = useSelector((state: any) => state.teams.sortDirection);
  const currentCell = useSelector((state: any) => state.teams.sortColumn);

  const [sortedData, setSortedData] = useState(tableTeamStats);

  const getSortedData = (data: any, cell: any, cellDirection: 'asc' | 'desc' | undefined) => {
    if (!cell || !cellDirection) return data;
    const res = data.slice().sort((a: any, b: any): any => {
      switch (cellDirection) {
        case 'asc': {
          if (typeof a[cell] === 'string') {
            return b[cell].localeCompare(a[cell]);
          }
          // typeof a[cell] === 'number'
          return b[cell] - a[cell];
        }
        case 'desc': {
          if (typeof a[cell] === 'string') {
            return a[cell].localeCompare(b[cell]);
          }
          // typeof a[cell] === 'number'
          return a[cell] - b[cell];
        }
      }
    });

    return res;
  };

  useEffect(() => {
    const currentSortedData = getSortedData(tableTeamStats, currentCell, currentCellDirection);
    setSortedData(currentSortedData);
  }, [currentCell, currentCellDirection]);

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <HeaderTable titles={tableTeamHeader} />
          </TableHead>
          <TableBody>
            {sortedData.map((item, index) => (
              <BodyTable key={index} data={item} number={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
