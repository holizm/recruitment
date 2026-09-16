import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>recruitmentCandidate</th>
    <th>recruitmentVacancy</th>
    <th>recruitmentApplicationDate</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.candidate?.person?.title}</td>
    <td>{item.vacancy?.title}</td>
    <DateTime value={item.applicationDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
