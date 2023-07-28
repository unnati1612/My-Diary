import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addContactValidate } from './validations';
import { Formik } from 'formik';
const EditContactModal = ({editVal,setEditVal,showEdit,setShowEdit,contactList,setContactList,label}) => {

  let initialValues={
    name:editVal?.name?editVal?.name:"",
    phone:editVal?.phone?editVal?.phone:"",
    email:editVal?.email?editVal?.email:"",
    createdAt: editVal?.createdAt?editVal?.createdAt:"",
    id:editVal?.id?editVal?.id:""
  }    

  // submit updated  data from form to update contact
  const handleEditSubmit=(values)=>{
    let result=[...contactList]
    let index=contactList.findIndex(item=>item.id===values.id);
    result[index]=values;
      setContactList(result)   
      localStorage.setItem("contactItems",JSON.stringify(result))
    setShowEdit(false)
    toast.info('Contact Updated!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  
  }

  return (

<Modal show={showEdit} onHide={() => setShowEdit(false)}>
<Modal.Header closeButton>
  <Modal.Title>{label} Contact</Modal.Title>
</Modal.Header>
<Modal.Body>
<Formik
initialValues={initialValues}
onSubmit={handleEditSubmit}
validationSchema={addContactValidate}
>
{
(formik)=>(

  <form onSubmit={formik.handleSubmit}>
  <div className='mb-3'>
  <label for="name">Name: </label>
  <input
  type="text"
  name="name"
  className="form-control "
  value={formik.values.name}
  // onChange={(e) => {
  //   setEditVal({ ...editVal, name: e.target.value });
  // }}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {
    formik.errors.name && formik.touched.name && <small className='text-danger'>{formik.errors.name}</small>
  }
  </div>
  <div className='mb-3'>

  <label for="phone">Phone Number: </label>
  <input
  type="text"
  name="phone"
  value={formik.values.phone}
  className="form-control "
  // onChange={(e) => {
  //   setEditVal({ ...editVal, phone: e.target.value });
  // }}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  
  {
    formik.errors.phone && formik.touched.phone && <small className='text-danger'>{formik.errors.phone}</small>
  }
  </div>
  <div className='mb-3'>

  <label for="email">Email: </label>
  <input
  type="text"
  name="email"
  value={formik.values.email}
  className="form-control "
  // onChange={(e) => {
  //   setEditVal({ ...editVal, email: e.target.value });
  // }}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  
  {
    formik.errors.email && formik.touched.email && <small className='text-danger'>{formik.errors.email}</small>
  }
  </div>
  <div className="text-center">
  <button type="submit" className="btn btn-outline-success">
  {" "}
  Save
  </button>
  </div>
  </form>
  )
    }
</Formik>

</Modal.Body>

</Modal>
  )
}

export default EditContactModal