import _ from 'lodash'

export const initialState = {
  sheets: [],
  activeSheet: {
  },
  layout: [],
  selectedWidget: []
};

export const intialActiveSheetState = {
  id: undefined,
  name: undefined,
  data: []
}

function uuid() {
  return Math.random() + Date.now() + ""
}

export default function sheetsReducer(state = initialState, action) {
  let modifiedSheets
  switch (action.type) {
    case 'SET_SHEETS':
      modifiedSheets = [].concat(action.sheets)
      modifiedSheets.forEach((sheet) => {
        sheet.data.forEach((widget) => {
          if (widget && !widget.id) {
            widget.id = uuid()
          }
        })
        if (!sheet.id)
          sheet.id = uuid()
      })
      return {...state, sheets: modifiedSheets}

    case 'SET_ACTIVE_SHEET':
      let newSheet = Object.assign({}, action.sheet)
      newSheet.data = state.sheets.filter(function(d) { return d.id === newSheet.id })[0]["data"]
      newSheet.layout = state.sheets.filter(function(d) { return d.id === newSheet.id })[0]["layout"]
      return {...state, activeSheet: newSheet}
    case "STORE_LAYOUT_CHANGE":
      let currentActiveSheet = state.activeSheet
      return {...state, activeSheet: {...currentActiveSheet, layout: action.payload}}
    case 'UPDATE_SHEETS':
      let sheets = Object.assign([], state.sheets)
      modifiedSheets = sheets.map((e) => {
        if (e.id === state.activeSheet.id) {
          return {...e, data: state.activeSheet.data, layout: state.activeSheet.layout}
        }
        return e
      })
      return {...state, sheets: modifiedSheets}
    case "UPDATE_ACTIVE_SHEET":
      let activeSheet = state.activeSheet
      return {...state, activeSheet: {...activeSheet, data: action.payload, layout: state.activeSheet.layout}}
    case 'SET_DEFAULT_ACTIVE_SHEET':
      return {...state, activeSheet: _.cloneDeep(state.sheets[0])}
    case 'SELECT_WIDGET':
      if (_.isUndefined(action.payload) || _.isEmpty(action.payload)) {
        return {...state, selectedWidget: []}
      }
      if (_.isArray(action.payload)) {
        return {...state, selectedWidget: action.payload}
      }
      let selectedWidgetsClone = _.cloneDeep(state.selectedWidget)
      if (action.toggle) {
        if (_.includes(selectedWidgetsClone.map((w) => { return w.id }), action.payload.id)) {
          if (action.toggle) {
          }
          selectedWidgetsClone = selectedWidgetsClone.filter((w) => {
            return w.id !== action.payload.id
          })
        } else {
          selectedWidgetsClone.push(action.payload)
        }
      } else {
        selectedWidgetsClone = selectedWidgetsClone.map((w) => {
          if (w.id === action.payload.id) {
            return action.payload
          } else {
            return w
          }
        })
      }
      return {...state, selectedWidget: selectedWidgetsClone }
    case 'UPDATE_SHEET_WIDGETS':
      let modifiedSheets = state.sheets.map((sheet) => {
        if (action.id === sheet.id) {
          return {...sheet, data: action.data}
        } else {
          return sheet
        }
      })
      return {...state, sheets: modifiedSheets}
  }
  return state
}

export function activeSheetReducer(state = intialActiveSheetState, action) {
  switch(action.type) {
    case 'SET_NAME':
      return {...state, name: action.name}
    case 'SET_DATA':
      return {...state, data: action.data}
  }
  return state
}
