import React from 'react'
import { CCard, CCardHeader, CCardBody, CTable, CTableRow, CTableHeaderCell, CTableBody, CTableHead, CTableDataCell, CButton } from '@coreui/react'
import { DocsLink } from 'src/components'

const Users = () => {
    return (
        <>
            <CCard className="mb-4">
                <CCardHeader>Users List</CCardHeader>
                <CCardBody>
                    <CButton color="primary">Add User</CButton>
                    <CTable striped>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Null</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                                <CTableDataCell>Cell</CTableDataCell>
                                <CTableDataCell>Cell</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                                <CTableDataCell>Cell</CTableDataCell>
                                <CTableDataCell>Cell</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                                <CTableDataCell>Cell</CTableDataCell>
                                <CTableDataCell>Cell</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                                <CTableDataCell>Cell</CTableDataCell>
                                <CTableDataCell>Cell</CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Users