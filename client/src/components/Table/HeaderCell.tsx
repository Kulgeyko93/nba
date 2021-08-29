import React from 'react';
import { makeStyles, TableSortLabel } from '@material-ui/core';
import { setSortColumn, setSortDirection } from './../../store/actions/teamsTableActions';
import { useDispatch, useSelector } from 'react-redux';

type TProps = {
  cellValue: string;
  index: number;
};

export const HeaderCell = ({ cellValue, index }: TProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentColumnt = useSelector((state: any) => state.teams.sortColumn);

  const setCurrentColumn = (payload: string) => dispatch(setSortColumn(payload));
  const setCurrentSortDirection = (payload: any) => dispatch(setSortDirection(payload));

  const currentCellDirection: 'asc' | 'desc' | undefined = useSelector((state: any) => state.teams.sortDirection);
  const currentCell = useSelector((state: any) => state.teams.sortColumn);

  const changeSortDirection = (value: 'asc' | 'desc' | undefined) => {
    switch (value) {
      case 'asc': {
        return 'desc';
      }
      case 'desc': {
        return undefined;
      }
      case undefined: {
        return 'asc';
      }
    }
  };

  const isDirection = () => {
    if (cellValue === currentCell) return currentCellDirection;
    return undefined;
  };

  return (
    <div
      className={index === 0 ? classes.headerFirstCell : classes.headerCells}
      onClick={() => {
        if (cellValue !== currentColumnt) {
          setCurrentSortDirection(changeSortDirection(undefined));
        } else {
          setCurrentSortDirection(changeSortDirection(currentCellDirection));
        }
        setCurrentColumn(cellValue);
      }}
    >
      {cellValue}
      {index !== 0 && <TableSortLabel direction={isDirection()} active={!!isDirection()} />}
    </div>
  );
};

const useStyles = makeStyles({
  headerRow: {},
  headerFirstCell: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  headerCells: {
    display: 'flex',
    flexWrap: 'nowrap',
    cursor: 'pointer',
  },
});
