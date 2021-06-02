import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Card() {
  const [CardData, setCardData] = useState([1, 2, 3, 4]);
  
  function CardList() {
    const numbers = CardData;
    const CardDataList = numbers.map((List) => (
      <div class="bg-white overflow-hidden shadow rounded-lg">
       
        <div class="px-4 py-4 sm:p-6">
          <dt class="text-sm mb-4 font-medium  text-gray-500 truncate">
            Total Subscribers
          </dt>
          <div class="flex items-center">
            <div className="cardIcon">
              <AccountCircleIcon />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dd class="flex items-baseline">
                <div class="text-2xl font-semibold text-gray-900">71,897</div>
              </dd>
            </div>
          </div>
        </div>
        <Link
          to="UserTable"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          <div class="bg-gray-50 text-center px-4 py-4 sm:px-6">
            <div class="text-sm"> View all</div>
          </div>
        </Link>
      </div>
    ));
    return (
      <ul>
        <dl class="m-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CardDataList}{" "}
        </dl>
      </ul>
    );
  }
  return (
    <div>
      <div>{CardList()}</div>
    </div>
  );
}
export default Card;
