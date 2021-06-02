import React, { useState } from "react";

function SingleBlog() {
  function BlogDataList() {
    const [BlogData, setBlogData] = useState([1, 2, 3, 4]);
    const DataList = BlogData.map(() => (
      <div class="flex">
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center rounded-md bg-indigo-500 text-white w-200">
             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="image"/>
          </div>
        </div>
        <div class="ml-4">
       
          <dt class="text-lg leading-6 font-medium text-gray-900">
          <p class="doubleQt">	“</p>
            No hidden fees
          </dt>
          <dd class="mt-2 text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </dd>
        </div>
      </div>
    ));
    return DataList;
  }
  return (
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <BlogDataList />
      </dl>
    </div>
  );
}

export default SingleBlog;
