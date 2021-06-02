import React from "react";
import SearchIcon from '@material-ui/icons/Search';
function Search() {

  return (
    <div>
      <div class="p-8">
        <div class="bg-white flex items-center rounded-full shadow-xl">
          <input
            class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none searchInput"
            id="search"
            type="text"
            placeholder="Search"
          />

          <div class="justify-content-end">
            <button class="rounded-full focus:outline-none w-12  flex items-center justify-center">
              <SearchIcon/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
