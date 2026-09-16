import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>recruitmentVacancy</th>
    <th>recruitmentCode</th>
    <th>recruitmentDepartment</th>
    <th>recruitmentClosingDate</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.department?.title}</td>
    <DateTime value={item.closingDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
