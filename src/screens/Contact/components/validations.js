import * as Yup from 'yup';


export const addContactValidate=Yup.object().shape({
    name:Yup.string().trim()
    .min(2,"Too Short")
    .max(20,"Too Long")
    .required('Required'),
    email:Yup.string().email('Invalid Email').required('Required'),
    phone:Yup.string().min(10,'10 digits only').max(10,'10 digits only').required('Required')
})