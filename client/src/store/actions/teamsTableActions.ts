import { teamsTableActions } from '../../constants/actions';
import { TSortDirection } from '../../interfaces&types/types';

export const setCurrentPage = (payload: number) => ({type: teamsTableActions.SET_CURRENT_PAGE, payload});
export const setPageSize = (payload: number) => ({type: teamsTableActions.SET_PAGE_SIZE, payload});
export const setSortColumn = (payload: string) => ({type: teamsTableActions.SET_SORT_COLUMN, payload});
export const setSortDirection = (payload: 'asc' | 'desc' | undefined) => ({type: teamsTableActions.SET_SORT_DIRECTION, payload});