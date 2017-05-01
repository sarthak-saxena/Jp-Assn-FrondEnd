export const initialState = {
  companyReports: [],
  userReports: [],
  activeReport: undefined,
  editable: false,
  editMetricsPanel: false,
  editFiltersPanel: false,
  editDimensionsPanel: false,
  editDatesPanel: false,
  multipleFiltersTogglingType: 'append',
  multipleDimensionsTogglingType: 'append',
  multipleMetricsTogglingType: 'append',
  editDatesPanelType: '',
  autoSave: true
};

export default function reportsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_REPORTS':
      return {...state, userReports: action.userReports}
    case 'SET_COMPANY_REPORTS':
      return {...state, companyReports: action.companyReports}
    case 'SET_ACTIVE_REPORT':
      return {...state, activeReport: action.report}
    case 'TOGGLE_EDIT_REPORT':
      return {...state, editable: !state.editable}
    case 'OPEN_METRICS_EDIT_PANEL':
      return {...state, editMetricsPanel: true}
    case 'HIDE_METRICS_EDIT_PANEL':
      return {...state, editMetricsPanel: false}
    case 'OPEN_FILTERS_EDIT_PANEL':
      return {...state, editFiltersPanel: true}
    case 'HIDE_FILTERS_EDIT_PANEL':
      return {...state, editFiltersPanel: false}
    case 'OPEN_DIMENSIONS_EDIT_PANEL':
      return {...state, editDimensionsPanel: true}
    case 'HIDE_DIMENSIONS_EDIT_PANEL':
      return {...state, editDimensionsPanel: false}
    case 'OPEN_BREAKDOWNS_EDIT_PANEL':
      return {...state, editBreakdownsPanel: true}
    case 'HIDE_BREAKDOWNS_EDIT_PANEL':
      return {...state, editBreakdownsPanel: false}
    case 'SET_SCHEDULE':
      return {...state, activeReport: {...state.activeReport, schedule: action.schedule}}
    case 'CHANGE_METRICS_TOGGLING_TYPE':
      return {...state, multipleMetricsTogglingType: action.changeType}
    case 'OPEN_DATES_EDIT_PANEL':
      return {...state, editDatesPanel: true, editDatesPanelType: action.dateType}
    case 'HIDE_DATES_EDIT_PANEL':
      return {...state, editDatesPanel: false}
    case 'TOGGLE_AUTO_SAVE':
      return {...state, autoSave: !state.autoSave}
  }
  return state
}
