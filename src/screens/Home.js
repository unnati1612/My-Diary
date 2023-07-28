import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container  ">
      <h2 className="text-center my-3 ">My Diary</h2>
      <div className="row mt-5">
        <div className=" col-4 ">
        <Link to="/job" style={{ textDecoration:"none"}}>
          <div
            className="col-12 border d-flex justify-content-center align-items-center "
            style={{
              height: "300px",
              background:
                "url(https://img.freepik.com/free-photo/copy-space-surrounded-by-office-supplies_23-2148475345.jpg)",
                cursor: "pointer",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
               

            }}
          >
            <h2 className="text-black">Job List</h2>
          </div>
        </Link>
        </div>
        <div className="col-4 ">
        <Link to="/contact"  style={{ textDecoration:"none"}}>

          <div
            className="col-12 border d-flex justify-content-center align-items-center"
            style={{
              height: "300px",
              background:
                "url(https://media.istockphoto.com/id/870307396/fr/photo/t%C3%A9l%C3%A9phone-de-symbole-de-bloc-de-bois-mail-adresse-et-t%C3%A9l%C3%A9phone-mobile-page-de-site-web-nous.jpg?s=612x612&w=0&k=20&c=IcbCf_xT76Yr6JKqd-dHZODM4BPXSTUv5ZfNGXPyMbQ=)",
              backgroundSize: "cover",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              cursor: "pointer"

            }}
          >
            <h2 className="text-black">Contact List</h2>
          </div>
          </Link>
        </div>
        <div className="col-4 ">
        <Link to="/todo"  style={{ textDecoration:"none"}}>

          <div
            className="col-12 border d-flex justify-content-center align-items-center"
            style={{
              height: "300px",
              background:
                "url(https://cdn1.vectorstock.com/i/1000x1000/13/40/todo-list-seamless-pattern-universal-background-vector-7561340.jpg)",
              backgroundSize: "cover",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              cursor: "pointer"

            }}
          >
            <h2 className="text-black">To Do List</h2>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
