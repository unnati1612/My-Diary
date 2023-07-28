import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { addContactValidate } from "./validations";
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import moment from 'moment';

const AddContactModal = ({contactData,setContactData,show,setShow,label,contactList,setContactList}) => {

  let initialValues={
      name:'',
      email:'',
      phone:''
  }

  //submit data from form to add a contact
  const handleSubmit = (values) => {
    let check = contactList?.filter((item) => item.phone === values.phone);
    let objData = {
      name: values.name,
    phone: values.phone,
    email: values.email,
    // createdAt: moment().format('YYYY-MM-DD'),
    createdAt: new Date().toISOString(),
    id:values?.phone
    }
    if (check?.length == 0) {
      setContactList([...contactList, objData]);
      let str = JSON.stringify([...contactList, objData]);
      localStorage.setItem("contactItems", str);      
      setShow(false);
      toast.success('Contact Added!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
        toast.error('Duplicate Entry!!', {
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

  };
    
  return (
 

<Modal show={show} onHide={() => setShow(false)}>
<Modal.Header closeButton>
  <Modal.Title>{label} Contact</Modal.Title>
</Modal.Header>
<Modal.Body>

    <Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={addContactValidate}
    >
    {(formik)=>(

      <form onSubmit={formik.handleSubmit}>
      <div className='mb-3'>
      <label for="name">Name: </label>
      <input
        type="text"
        name="name"
        className="form-control"
        // onChange={(e) => {
          // setContactData({ ...contactData, name: e.target.value });
        // }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {
        formik.errors.name && formik.touched.name && <small className='text-danger' >{formik.errors.name}</small>
      }
      </div>
      <div className='mb-3'>

      <label for="phone">Phone Number: </label>
      <input
        type="text"
        name="phone"
        className="form-control "
        maxLength={10}
        // onChange={(e) => {
        //   setContactData({ ...contactData, phone: e.target.value });
        // }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {
        formik.errors.phone && formik.touched.phone && <small className='text-danger' >{formik.errors.phone}</small>
      }
      </div>
      <div className='mb-3'>

      <label for="email">Email: </label>
      <input
        type="text"
        name="email"
        className="form-control"
        // onChange={(e) => {
        //   setContactData({ ...contactData, email: e.target.value });
        // }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {
        formik.errors.email && formik.touched.email && <small className='text-danger' >{formik.errors.email}</small>
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

export default AddContactModal