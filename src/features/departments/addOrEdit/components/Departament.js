import React from "react";
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";
import { Card } from "@totalsoft/rocket-ui";
import { Info, Description } from "@mui/icons-material";
import DepartamentInfo from './DepartamentInfo'
import DepartamentDescription from './DepartamentDescription'


const Departament = props => {
    const {name, code, employees, description, dispatch} = props
    const {t} = useTranslation()

    return(
        <>
        <Card icon ={Info} title={t('Departament.Info')}>
        <DepartamentInfo name = {name} code = {code} employees = {employees} dispatch = {dispatch}/>
        </Card>
        <Card icon = {Description} title={t('Departament.Description')}>
        <DepartamentDescription description = {description} dispatch = {dispatch}/>
        </Card>
        </>
    )
}

Departament.propTypes = {
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    employees: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default Departament