import { emptyString } from 'utils/constants'

export const initialDepartament = {
  name: emptyString,
  code: emptyString,
  employees: null,
  description: emptyString
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
    case 'code':
    case 'employees':
    case 'description':
      return { ...state, [action.type]: action.payload }

    case 'resetData':
      return { ...initialDepartament, ...action.payload }
  }
}
