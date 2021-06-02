import React from "react";
import  axios from "axios";
import CustomTextInput from "./CustomTextInput";
export default function Modal(props,title,email,role) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData={
     title ,
      email,
      role
    }
    // axios.post('https://jsonplaceholder.typicode.com/posts.json' , postData,).then(Response => )
   

    // console.log("data added")
    e.target.reset();
  };

  return (
    <>
      <div
        style={{ background: "#00000087" }}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="model relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add New Item</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.onClose()}
              >
                <span className="text-black h-6 w-6 text-2xl">×</span>
              </button>
            </div>

            <form className="form Modal-form" onSubmit={handleSubmit}>
              <CustomTextInput
                id="Title"
                label="Title"
                onChange={(e) => console.log(e)}
              />
              <CustomTextInput
                id="email"
                label="Email Address"
                onChange={(e) => console.log(e)}
              />
              <CustomTextInput
                id="Role"
                type="text"
                label="Role"
                onChange={(e) => console.log(e)}
              />
              <div className="buttonTopMargin">
                <button  type="submit" class="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
