import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        required
        vacancy
    />
    <Text
        candidate
        required
    />
    <DateTime
        applicationDate
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
