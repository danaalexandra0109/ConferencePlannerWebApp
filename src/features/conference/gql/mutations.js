import { gql } from '@apollo/client'
import Fragments from './fragments'

export const UPDATE_CONFERENCE = gql`
  mutation saveConference($input: ConferenceInput!) {
    saveConference(input: $input) {
      ...conference
      type {
        ...type
      }
      category {
        ...category
      }
      location {
        ...location
        city {
          ...city
        }
        county {
          ...county
        }
        country {
          ...country
        }
      }
      speakers {
        ...speaker
      }
    }
  }
  ${Fragments.conference}
  ${Fragments.speaker}
  ${Fragments.location}
  ${Fragments.type}
  ${Fragments.category}
  ${Fragments.city}
  ${Fragments.county}
  ${Fragments.country}
`

export const CHANGE_ATTENDANCE_STATUS_MUTATION = gql`
  mutation changeAttendanceStatus($input: AttendeeInput!) {
    changeAttendanceStatus(input: $input)
  }
`
export const DELETE_CONFERENCE = gql`
  mutation deleteConference($id: Int!) {
    deleteConference(id: $id)
  }
`

export const DELETE_DEPARTAMENT = gql`
  mutation deleteDepartment($id: Int!) {
    deleteDepartment(id: $id)
  }
`

export const UPDATE_DEPARTAMENT = gql`
  mutation updateDepartment($input: EditDep) {
    updateDepartment(input: $input)
  }
`

export const ADD_DEPARTAMENT = gql`
mutation addDepartment($input: AddDep){
  addDepartment(input: $input)
}
`
