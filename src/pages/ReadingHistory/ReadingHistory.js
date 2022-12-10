import React from "react";
import { useSelector } from "react-redux";
import Histories from "../../conponents/Histories";

const ReadingHistory = () => {
  const histories = useSelector((state) => state.product.readingHistory);
  console.log(histories);
  return (
    <div>
      <div className="max-w-7xl mx-auto my-4">
        {histories.map((history) => (
          <Histories history={history} key={history._id}></Histories>
        ))}
      </div>
    </div>
  );
};

export default ReadingHistory;
