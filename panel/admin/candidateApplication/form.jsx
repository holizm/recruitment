import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='recruitmentVacancy'
        property='vacancy'
        required
    />
    <Text
        placeholder='recruitmentCandidate'
        property='candidate'
        required
    />
    <DateTime
        placeholder='recruitmentApplicationDate'
        property='applicationDate'
        required
    />
    <LongText
        placeholder='recruitmentDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
