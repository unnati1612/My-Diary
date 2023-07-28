import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const JobDetails = () => {
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const [editData, setEditData] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (user, indexUser) => {
    setEditIndex(indexUser);
    console.log(user);
    setEditData(JSON.parse(JSON.stringify(user)));
    
    setShow(true);
  };
  const [userList, setUserList] = useState([
    {
      name: "Unnati",
      email: "unnatijain1612@gmail.com",
      phone: "99999999",
      job: [
        {
          jobtitle: "developer",
          experience: "2",
        },
        {
          jobtitle: "tester",
          experience: "2",
        },
      ],
    },
    
  ]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    job: [
      {
        jobtitle: "",
        experience: "",
      },
    ],
  });

  const jobDetails = {
    jobtitle: "",
    experience: "",
  };

  const handleAdd = () => {
    let lst = { ...userData };
    lst.job.push(jobDetails);
    setUserData(lst);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    if(userData.name!==""&&userData.email!==""&&userData.password!==""){
      userData.job=userData.job.filter((job)=>(
        job.jobtitle!==""&&job.experience!==""
      ))
    setUserList([...userList, userData]);
    console.log(userList);
    setUserData({
      name: "",
      email: "",
      phone: "",
      job: [
        {
          jobtitle: "",
          experience: "",
        },
      ],
    });
  } 
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const handleJobUpdate = (value, index,job) => {
    console.log(value, index);
    // let data = { ...editData };
    let jobData = [...job]
    jobData[index].jobtitle = value;
    setEditData({...editData, job: jobData});
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editData.job=editData.job.filter((job)=>(
      job.jobtitle!==""||job.experience!==""
    ))
    let lst=[...userList];
    lst[editIndex]=editData;
    setUserList(lst);
  };
  const handleEditAdd = (e) => {

    setEditData({ ...editData, job: [...editData.job, jobDetails] });
  };


  const handleDelete=(indexUser)=>{
    let lst=[...userList]
    lst.splice(indexUser,1);
    setUserList(lst);
  }
  const handleUserDataDelete=(index)=>{
    let lst={...userData}
    let jobList=lst.job
    
    jobList.splice(index,1);
    lst.job=jobList
    setUserData(lst)
  }
  const handleEditDelete=(indexJob)=>{
    let lst=[...editData.job];
    console.log(lst);
    lst.splice(indexJob,1);
    console.log("spliced",lst);
    let data={...editData}
    data.job=lst;
    setEditData(data);
  }
  
  return (
    <div>
  <div className="container">
    <h2 className='text-center text-decoration-underline'>JOB LIST </h2>
    
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row p-4">
            <div className="col-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control bg-light"
                value={userData.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control bg-light"
                value={userData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label>Phone</label>
              <input
                type="text"
                className="form-control bg-light"
                value={userData.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
          </div>
          <h5 className="px-4">Add Job Details</h5>
          <div>
            {userData?.job?.map((item, index) => (
              <div className="row px-4 py-2 ">
                <div className="col-4">
                  <label>Job Title</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value={userData.job[index].jobtitle}
                    id="jobtitle"
                    name="jobtitle"
                    onChange={(e) => {
                      console.log(e.target.value, index);
                      let lst = { ...userData };
                      lst.job[index].jobtitle = e.target.value;
                      setUserData(lst);
                    }}
                  />
                </div>
                <div className="col-4">
                  <label>Experience (Yrs)</label>
                  <input
                    type="number"
                    className="form-control bg-light"
                    id="experience"
                    value={userData.job[index].experience}
                    name="experience"
                    onChange={(e) => {
                      console.log(e.target.value, index);
                      let lst = { ...userData };
                      lst.job[index].experience = e.target.value;
                      setUserData(lst);
                    }}
                  />
                </div>
                <div className="col-1 align-items-center justify-content-between d-flex">
                  { userData.job.length!==1?
                <div className="ms-3" style={{cursor:"pointer"}} onClick={(e)=>handleUserDataDelete(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </div>
                  :""
}
                  {index + 1 === userData.job.length ? (
                    <div
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={handleAdd}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-plus-circle-fill "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary px-3 ms-4" type="submit">
            Create
          </button>
        </form>
      </div>

      <div>
        <h4 className="my-3 px-3">User Details</h4>

        <table className="table table-light px-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job Experience </th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((user, indexUser) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <ul>
                    {user.job.map((j) => (
                      <li>
                        {j.jobtitle}-{j.experience}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                  <div
                    onClick={() => handleShow(user, indexUser)}
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </div>
                  
                  <div className="ms-3" style={{cursor:"pointer"}} onClick={(e)=>handleDelete(indexUser)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleEditSubmit}>
          <Modal.Body>
            <div className="mb-2">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={editData?.name}
                name="name"
                onChange={handleEditChange}
              />
            </div>
            <div className="mb-2">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={editData?.email}
                name="email"
                onChange={handleEditChange}
              />
            </div>
            <div className="mb-2">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                value={editData?.phone}
                name="phone"
                onChange={handleEditChange}
              />
            </div>
            <div className="mb-2">
              <label className="mb-2">Job Details</label>
              {
                editData?.job?.length===0?
                <div
                      style={{ cursor: "pointer" }}
                      className="ms-2 "
                      onClick={handleEditAdd}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-plus-circle-fill "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                    </div>
                    :""
              }
              {editData?.job?.map((item, jobIndex) => (
                <div className="d-flex align-items-center">
                  <div>
                    <label>Job Title {jobIndex}</label>
                    <input
                      type="text"
                      className="form-control"
                      value={item.jobtitle}
                      name="jobtitle"
                      onChange={(e) => {
                        
                        console.log(e.target.value, jobIndex);
                        console.log(item);
                        handleJobUpdate(e.target.value, jobIndex,editData?.job);
                       
                      }}
                    />
                  </div>
                  <div>
                    <label>Experience</label>

                    <input
                      type="text"
                      className="form-control"
                      value={item.experience}
                      name="experience"
                      onChange={(e) => {
                        // handleJobUpdate(e.target.value,e.target.value, jobIndex);
                        let data = { ...editData };
                        data.job[jobIndex].experience = e.target.value;
                        setEditData(data);
                        // setEditData(editData=>{
                        //   let newData={...editData}
                        //   let newJobList=[...newData.job]
                        //   newJobList[jobIndex].experience=e.target.value;
                        //   newData.job=newJobList
                        //   return newData
                        // });
                      }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    
                  <div className="ms-3" style={{cursor:"pointer"}} onClick={(e)=>handleEditDelete(jobIndex)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                  </div>
                  
                  {(jobIndex + 1 === editData.job.length )? (
                    <div
                      style={{ cursor: "pointer" }}
                      className="ms-2 "
                      onClick={handleEditAdd}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-plus-circle-fill "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>

    </div>
  )
}

export default JobDetails