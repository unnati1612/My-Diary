import React, { useEffect, useState } from "react";
import AddContactModal from "./AddContactModal";
import EditContactModal from "./EditContactModal";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ContactList = () => {
    
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    createdAt: "",
    id:""
  });
  const [contactList, setContactList] = useState([]);
  const [label,setLabel]=useState("")
  const [editVal,setEditVal]=useState({
    name: "",
    phone: "",
    email: "",
    createdAt: "",
    id:""
  })

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
   
  //   let check = contactList?.filter((item) => item.phone === contactData.phone);

  //   contactData.id= contactData?.phone;
  //   contactData.createdAt=moment().format('YYYY-MM-DD')
  //   if (check?.length == 0) {
  //     setContactList([...contactList, contactData]);
  //     let str = JSON.stringify([...contactList, contactData]);
  //     localStorage.setItem("contactItems", str);      
  //     setShow(false);
  //     toast.success('Contact Added!!', {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //       });
  //   } else {
  //       toast.error('Duplicate Entry!!', {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //           });
  //   }

  // };
  // const handleEditSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(editVal)
  //   let result=[...contactList]
  //   let index=contactList.findIndex(item=>item.id===editVal.id);
  //   result[index]=editVal;
  //     setContactList(result)   
  //     localStorage.setItem("contactItems",JSON.stringify(result))
  //   setShowEdit(false)
  //   toast.info('Contact Updated!!', {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //       });
  
  // }

  //opens pop up to add data of new contact
  const handleAdd = ()=>{
    setLabel("Add")
    setShow(true)     
  }

  //delete an existing contact from list
  const handleDelete=(value)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Delete Contact",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!'
    }).then((result) => {
      if (result.isConfirmed) {              
        let data=contactList.filter((item)=>item.phone!==value)
        console.log(data)
        localStorage.setItem("contactItems",JSON.stringify(data))
        setContactList(data)
        toast.error('Contact Deleted!', {
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
    })
   
}
  //opens pop up to update data of existing contact
  
  const handleEdit=(item)=>{
    setLabel("Edit")
    setEditVal(item)
    setShowEdit(true)
  }
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    let items = localStorage.getItem("contactItems")
      ? JSON.parse(localStorage.getItem("contactItems"))
      : [];
    if (items.length > 0) {
      setContactList(items);
    }
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between mx-5 mb-3">
        <h3 >Contact List</h3>
        <button
          className="btn btn-outline-success"
          onClick={handleAdd}
        >
          Add Contact
        </button>
      </div>
      <div className="tablebox table-responsive text-center ">
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Name</th>
              <th scope="col">Phone No</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contactList?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <span className="text-danger cursor-pointer" onClick={()=>handleDelete(item.phone)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </span>
                  <span className="text-primary mx-3 cursor-pointer" onClick={()=>handleEdit(item)} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*========Add contact model============ */}
     <AddContactModal 
     contactData={contactData}
     setContactData={setContactData}
     show={show}
     setShow={setShow}
     label={label}
     contactList={contactList}
     setContactList={setContactList}
     />
     
     <EditContactModal 
     label={label}
     editVal={editVal}
     setEditVal={setEditVal}
     showEdit={showEdit}
     setShowEdit={setShowEdit}
     contactList={contactList}
     setContactList={setContactList}
     />
            
    </>

  );
};

export default ContactList;
