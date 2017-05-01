export const initialState = {
  linkedAnalytics: {},
  metricsOfSelectedChannels: [],
  metricsOfAllChannels: []
}

export default function metricsReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE_LINKED_ANALYTICS':
      return {
        ...state,
        linkedAnalytics: payload
      }
    case 'SET_METRICS_OF_ALL_CHANNELS':
      return {
        ...state,
        metricsOfAllChannels: payload
      }
    case 'SET_METRICS_OF_SELECTED_CHANNELS':
        return {
          ...state,
          metricsOfSelectedChannels: payload
        }
    case 'SET_CUSTOM_METRICS':
      return {
        ...state,
        customMetrics: payload,
      }
    case 'SET_DERIVED_METRICS':
      return {
        ...state,
        derivedMetrics: payload,
      }
    case 'ADD_NEW_DERIVED_METRICS':
      let updatedMetrics = state.metricsOfSelectedChannels.concat([payload])
      return {
       ...state,
         metricsOfSelectedChannels: updatedMetrics
      }
    default:
      return state
  }
}
