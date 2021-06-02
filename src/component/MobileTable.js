import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from "@material-ui/core/Grid";
import ReactPaginate from "react-paginate";

import Modal from "./Modal";
import EditForm from "./EditForm";
import DeteleMessageModel from "./DeteleMessageModel";

function MobileTable() {
  const [UserData, setUserData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [pageNumber, setpageNumber] = useState(0);
  const usersPerPage = 5;
  const pageVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(UserData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  const [ismodalopen, setismodalopen] = useState(false);
  const [isformopen, setisformopen] = useState(false);
  function onopenModal() {
    setismodalopen(true);
  }
  function onopenForm() {
    setisformopen(true);
  }
  function UserDataList() {
    const [indexShow, setindexShow] = useState(0);
    const DataList = UserData.slice(
      pageVisited,
      pageVisited + usersPerPage
    ).map((UserData, index) => {
      return (
        <div  >
        <tr>
          
   
           
            <td onClick={() => setindexShow(index)}>
              1
            </td>
  
          </tr>
  
          {indexShow === index ? (
           
              <div>
              <tr>
              <td className="Mtitle">Email </td>
              <td>jane.cooper@example.com</td>
              </tr>
              <tr>
              <td className="Mtitle">Status</td>
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
              </tr>
              <tr>
               
                <td>
                <Link
                  onClick={onopenForm}
                  class="hover:text-indigo-900 button color-white"
                >
                  Edit
                </Link>
                </td>
                <td>
                <Link
                  onClick={onopenModal}
                  class="hover:text-indigo-900 button"
                >
                Delete
                </Link>
                </td>
              </tr>
              
              
          </div>
          ) : null}
     
        </div>
      );
    });
    return DataList;
  }
  return (
    <div  className="mobile">
      <Grid container component="main">
        <Grid item xs={12}  sm={4} md={2}>
        <h1 className="title">User Data</h1>
        </Grid>
        <Grid className="main" item xs={false} sm={4} md={10}>
        <Modal />
         
        </Grid>
      </Grid>
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 responsiveTavle">
        <div class="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th>Id</th>
               
              </tr>
            </thead>
            {UserDataList()}
          </table>
        </div>
      </div>
      <ReactPaginate
 previousLabel={<ArrowBackIcon/>}
 nextLabel={<ArrowForwardIcon/>}
 pageCount={pageCount}
 onPageChange={changePage}
 containerClassName={"paginationButton"}
 previousLinkClassName={"previousButton"}
 nextLinkClassName={"nextButton"}
 disabledClassName={"paginationDisabled"}
 activeClassName={"paginationActive"}
></ReactPaginate>
      {ismodalopen ? (
        <DeteleMessageModel onClose={() => setismodalopen(false)} />
      ) : null}
      {isformopen ? <EditForm onClose={() => setisformopen(false)} /> : null}
    </div>
  );
}

export default MobileTable;
