import React from "react";

function YachtCard() {
  return (
    <div className="listing-card group/item relative inline-flex w-full flex-col">
      <div className="relative w-full overflow-hidden rounded-xl">
        <span className="absolute right-4 top-4 z-10 inline-block items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Early Discount
        </span>
      </div>
    </div>
  );
}

export default YachtCard;
