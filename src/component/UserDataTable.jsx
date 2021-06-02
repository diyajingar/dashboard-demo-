import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Grid from "@material-ui/core/Grid";
import ReactPaginate from "react-paginate";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "./Modal";
import EditForm from "./EditForm";
import DeteleMessageModel from "./DeteleMessageModel";
// import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
function UserDataTable() {
  const [posts, setPosts] = useState([]);
   function f() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
  }
  useEffect(() => {
    let mounted = true;
    f()
      .then(posts => {
        if(mounted) {
          console.log(posts);
          setPosts(posts)
        }
      })
    return () => mounted = false;
  }, [])



  
  const [pageNumber, setpageNumber] = useState(0);
  const usersPerPage = 5;
  const pageVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(posts.length / usersPerPage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  const [ismodalopen, setismodalopen] = useState(false);
  const [isDeteleMessageopen, setisDeteleMessageopen] = useState(false);
  const [isformopen, setisformopen] = useState(false);
  function onopenModal() {
    setismodalopen(true);
  }
  function onopenDeteleMessage() {
    setisDeteleMessageopen(true);
  }
  function onopenForm() {
    setisformopen(true);
  }

  function UserDataList() {
    const DataList = posts
      .slice(pageVisited, pageVisited + usersPerPage)
      .map((posts) => (
        <tr>
          <td>{posts.id}</td>
          <td>{posts.title}</td>
          <td>jane.cooper@example.com</td>
          <td>
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </td>
          <td>
            {" "}
            <Link
              onClick={onopenForm}
              class="text-indigo-600 hover:text-indigo-900"
            >
              <EditIcon />
            </Link>
          </td>
          <td>
            {" "}
            <Link
              onClick={onopenDeteleMessage}
              class="text-indigo-600 hover:text-indigo-900"
            >
              <DeleteIcon />
            </Link>
          </td>
        </tr>
      ));
    return DataList;
  }
  return (
    <div className="laptop">
      <Grid container component="main">
        <Grid item xs={12} sm={4} md={2}>
          <h1 className="title">User Data</h1>
        </Grid>
        <Grid className="main addButton" item xs={false} sm={4} md={10}>
          <Link onClick={onopenModal} class="button">
            <AddIcon className="iconColor" /> Add New
          </Link>
        </Grid>
      </Grid>

      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 responsiveTavle">
        <div class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Email</th>
                <th> Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {UserDataList()}
          </table>
        </div>
      </div>
      <ReactPaginate
        previousLabel={<ArrowBackIcon />}
        nextLabel={<ArrowForwardIcon />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButton"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      ></ReactPaginate>
      {isDeteleMessageopen ? (
        <DeteleMessageModel onClose={() => setisDeteleMessageopen(false)} />
      ) : null}
      {ismodalopen ? <Modal onClose={() => setismodalopen(false)} /> : null}
      {isformopen ? <EditForm onClose={() => setisformopen(false)} /> : null}
    </div>
  );
}

export default UserDataTable;
