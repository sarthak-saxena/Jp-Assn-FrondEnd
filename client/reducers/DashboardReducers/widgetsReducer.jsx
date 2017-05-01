import _ from 'lodash'
export const initialState = []

function uuid() {
  return Math.random() + Date.now() + ""
}

function validateLayout(layout) {
  return {
    i: layout.i,
    x: layout.x || 0,
    y: layout.y || 0,
    h: layout.h || 5,
    w: layout.w || 5
  }
}

export default function widgetsReducer(state = initialState, action) {
  let selectedWidgets
  switch (action.type) {
    case 'SET_WIDGETS':
      let widgets
      widgets = [].concat(action.widgets)
      widgets.forEach(function(d) {
        if (!_.isUndefined(d) && !d.id)
          d.id = uuid()
      })
      return widgets
    case 'SET_DATA_FOR_WIDGET':
      return state.map((widget) => {
        if (widget.id === action.id) {
         return Object.assign({}, widget, { data: action.data})
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_LAYOUT':
      return state.map((widget, index) => {
        let newLayout = Object.assign({}, action.payload[index]);
        return {..._.cloneDeep(widget), layout: validateLayout(_.clone(newLayout)) }
      })
    case "UPDATE_WIDGET_NAME":
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { name: action.payload.name })
        } else {
          return widget
        }
      })
    case "UPDATE_WIDGET_METRICS":
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { metrics: action.payload.metrics })
        } else {
          return widget
        }
    })
    case 'ALL_WIDGETS_METRICS_UPDATE':
      selectedWidgets = _.cloneDeep(action.selectedWidget.map((w) => { return w.id }))
      return state.map((widget) => {
        if (_.includes(selectedWidgets, widget.id)) {
          if (action.editType === "append") {
            let appliedMetrics = _.uniq((widget.metrics || []).concat([action.payload.metric]))
            return {...widget, metrics: appliedMetrics}
          } else if (action.editType === "replace"){
            return {...widget, metrics: [action.payload.metric]}
          }
        } else {
          return widget
        }
      })
    case "UPDATE_WIDGET_FILTERS":
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { filters: action.payload.filters })
        } else {
          return widget
        }
    })
    case "ADD_WIDGET_FILTER":
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          let newFilters
          if (widget.filters) {
            newFilters = widget.filters.concat([action.payload.filter])
          } else {
            newFilters = [action.payload.filter]
          }
          return Object.assign({}, widget, { filters: newFilters })
        } else {
          return widget
        }
    })
    case 'ADD_WIDGET':
      let newWidget = action.payload
      return state.concat(newWidget)
    case 'DELETE_WIDGET':
      return state.filter((e) => {
        return e.id !== action.id
      })
    case 'WIDGETS_UPDATE_FILTERS':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { filters: action.payload.filters })
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_PAGE_SIZE':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { pageSize: action.payload.pageSize })
        } else {
          return widget
        }
      })
    case 'ALL_WIDGETS_UPDATE_FILTERS':
      selectedWidgets =  _.cloneDeep(action.selectedWidget.map((w) => { return w.id }))
      return state.map((widget) => {
        if (_.includes(selectedWidgets, widget.id)) {
          if (action.editType === "append") {
            let appendedFilters = _.uniq((widget.filters || []).concat([action.payload.filter]))
            return {...widget, filters: appendedFilters}
          } else if (action.editType === "aggregate") {
            return {...widget, filters: [action.payload.filter]}
          }
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_DIMENSIONS':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { dimensions: action.payload.dimensions })
        } else {
          return widget
        }
      })
    case 'ALL_WIDGETS_UPDATE_DIMENSIONS':
      return state.map((widget) => {
        if (action.append === true) {
          let appendedDimensions = _.uniq((widget.dimensions || []).concat(action.payload.dimensions))
          return {...widget, dimensions: appendedDimensions}
        } else {
          return {...widget, dimensions: action.payload.dimensions}
        }
      })
    case 'WIDGETS_UPDATE_METRIC_VISUALIZATION':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { metricVisualizationType: action.payload.metricVisualizationType })
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_BREAKDOWNS':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { breakdowns: action.payload.breakdowns })
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_ADDITIONAL_DATA_OPTIONS':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { additionalDataOptions: action.payload.additionalDataOptions })
        } else {
          return widget
        }
      })
    case 'UPDATE_WIDGET_STYLE':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { widgetStyle: action.payload.widgetStyle })
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_SORT_BY':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { sort_by: action.payload.sort_by })
        } else {
          return widget
        }
      })
    case 'WIDGETS_UPDATE_SORT_ORDER':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { sort_order: action.payload.sort_order })
          } else {
          return widget
        }
      })
    case 'UPDATE_CHART_AXIS':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { chartAxis: action.payload.chartAxis })
        } else {
          return widget
        }
      })
    case 'UPDATE_TEXT_WIDGET_DATA':
      return state.map((widget) => {
        if (widget.id === action.payload.id) {
          return Object.assign({}, widget, { widgetStyle: action.payload.widgetStyle })
          } else {
          return widget
        }
      })
    case 'UPDATE_WIDGET':
      return state.map((widget) => {
        if (widget.id === action.id) {
          return action.data
        } else {
          return widget
        }
      })
    case 'UPDATE_WIDGET_DATES':
      return state.map((widget) => {
        if (_.includes(action.payload.id, widget.id)) {
          if (action.payload.dateType === 'date') {
            return Object.assign({}, widget, { date: action.payload.date })
          } else if (action.payload.dateType === 'comparedDate') {
            return Object.assign({}, widget, { comparedDate: action.payload.date })
          }
        } else {
          return widget
        }
      })
    // case 'UPDATE_CHART_AXIS_METRICS':
    //   return state.map((widget) => {
    //     if (widget.id === action.payload.id) {
    //       } else {
    //       return widget
    //     }
    //   })
  }
  return state
}
