import { DateTime } from 'list'

export default item => <>
    <td>{item.candidate?.person?.title}</td>
    <td>{item.vacancy?.title}</td>
    <DateTime value={item.applicationDate} />
    <td>{item.state?.title}</td>
</>
