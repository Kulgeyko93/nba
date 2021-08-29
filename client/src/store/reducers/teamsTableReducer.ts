import { teamsTableActions } from '../../constants/actions';

const defaultState = {
  currentPage: 1,
  pageSize: 5,
  sortColumn: null,
  sortDirection: null,
};

export const teamsTableReducer = (state: any = defaultState, action: any): any => {
  const {type, payload} = action;
  switch (type) {
    case teamsTableActions.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload
      }
    }
    case teamsTableActions.SET_PAGE_SIZE: {
      return {
        ...state,
        pageSize: payload
      }
    }
    case teamsTableActions.SET_SORT_COLUMN: {
      return {
        ...state,
        sortColumn: payload
      }
    }
        case teamsTableActions.SET_SORT_DIRECTION: {
      return {
        ...state,
        sortDirection: payload
      }
    }
    
    default: {
      return state;
    }
  }
}