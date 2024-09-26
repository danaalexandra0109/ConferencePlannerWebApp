import { accordionActionsClasses } from '@mui/material'
import { append, modify, modifyPath, remove } from 'ramda'
import { emptyString, emptyArray } from 'utils/constants'

export const initialDepartament = {
  name: emptyString,
  code: emptyString,
  numberOfEmployees: null,
  description: emptyString
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
    case 'code':
    case 'numberOfEmployees':
    case 'description':
      return { ...state, [action.type]: action.payload }
  }
}
