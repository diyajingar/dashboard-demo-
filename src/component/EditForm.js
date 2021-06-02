import React from "react";
import { Link } from "react-router-dom";
import CustomTextInput from "./CustomTextInput";
function EditForm(props) {
  return (
    <div>
      <div
        style={{ background: "#00000087" }}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex items-start text-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl  font-semibold">Edit Form</h3>
            <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.onClose()}
                  >
                    <span className="text-black h-6 w-6 text-2xl">×</span>
                  </button>
          </div>
          <form className="form Modal-form" noValidate>
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
              <Link onClick={() => props.onClose()} class="button">
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/*body*/}
    </div>
  );
}

export default EditForm;
