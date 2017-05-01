import moment from 'moment'
export const initialState = {
  date: {
  },
  comparedDate: {
  },
  compareTillHour: true,
  moment: moment()
};

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_DATE_RANGE':
      return {...state, date: action.payload}
    case 'UPDATE_DATE_RANGE_COMPARE':
      return {...state, comparedDate: action.payload}
    case 'SET_MOMENT_OBJECT':
      return {...state, moment: action.moment}
  }
  return state
}
