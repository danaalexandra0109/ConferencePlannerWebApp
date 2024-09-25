import { useQuery } from '@apollo/client'
import { FakeText } from '@totalsoft/rocket-ui'
import { DEPARTAMENT_LIST_QUERY } from 'features/conference/gql/queries'
import React, { useTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import DepartmentsList from './DepartmentsList'

const DepartmentListContainer = () => {
  // const navigate = useNavigate()
  // const { t } = useTransition()

  const { data, loading } = useQuery(DEPARTAMENT_LIST_QUERY)

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <>
      <DepartmentsList departaments={data?.departmentsList} />
    </>
  )
}

export default DepartmentListContainer
