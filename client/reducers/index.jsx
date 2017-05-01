import commonReducer, { initialState as commonInitialState } from './commonReducer.jsx'
import metricsReducer, { initialState as metricsInitialState } from './metricsReducer.jsx'
import reportsReducer, { initialState as reportsInitialState } from './DashboardReducers/reportsReducer.jsx'
import sheetsReducer, { initialState as sheetsInitialState } from './DashboardReducers/sheetsReducer.jsx'
import dateReducer, { initialState as datesInitialState } from './dateReducer.jsx'
import { activeSheetReducer } from './DashboardReducers/sheetsReducer.jsx'
import { intialActiveSheetState as activeSheetInitialState } from './DashboardReducers/sheetsReducer.jsx'
import widgetsReducer, { initialState as widgetsInitialState } from './DashboardReducers/widgetsReducer.jsx'

export default {
  commonStore: commonReducer,
  metricsStore: metricsReducer,
  reportsStore: reportsReducer,
  sheetsStore: sheetsReducer,
  activeSheetStore: activeSheetReducer,
  widgetsStore: widgetsReducer,
  dateStore: dateReducer
};


export const initialStates = {
  commonInitialState,
  metricsInitialState,
  reportsInitialState,
  sheetsInitialState,
  activeSheetInitialState,
  widgetsInitialState,
  datesInitialState
};
