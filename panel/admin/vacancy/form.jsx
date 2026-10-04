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
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='department'
        property='department'
    />
    <Numeric
        placeholder='openingsCount'
        property='openingsCount'
        required
    />
    <DateTime
        placeholder='openedDate'
        property='openedDate'
        required
    />
    <DateTime
        placeholder='closingDate'
        property='closingDate'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
