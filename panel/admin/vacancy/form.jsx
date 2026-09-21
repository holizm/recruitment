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
        placeholder='recruitmentCode'
        property='code'
        required
    />
    <Text
        placeholder='recruitmentDepartment'
        property='department'
    />
    <Numeric
        placeholder='recruitmentOpeningsCount'
        property='openingsCount'
        required
    />
    <DateTime
        placeholder='coreOpenedDate'
        property='openedDate'
        required
    />
    <DateTime
        placeholder='recruitmentClosingDate'
        property='closingDate'
    />
    <LongText
        placeholder='recruitmentDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
