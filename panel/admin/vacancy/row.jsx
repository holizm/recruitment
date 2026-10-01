import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.department?.title}</td>
    <DateTime value={item.closingDate} />
    <td>{item.state?.title}</td>
</>
