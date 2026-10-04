import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='vacancy'
        property='vacancy'
        required
    />
    <Text
        placeholder='candidate'
        property='candidate'
        required
    />
    <DateTime
        placeholder='applicationDate'
        property='applicationDate'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
