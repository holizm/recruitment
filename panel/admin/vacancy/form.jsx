import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Text department />
    <Numeric
        openingsCount
        required
    />
    <DateTime
        openedDate
        required
    />
    <DateTime closingDate />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
