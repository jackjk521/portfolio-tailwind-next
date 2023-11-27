import React from "react";

function BentoSquare() {
  return (
    <div class="container px-5 mx-auto">
      <div class="grid grid-cols-12 gap-4 p-1">
        <div class="col-span-12 rounded-lg border border-gray-500 bg-black-200 p-32 sm:col-span-8">
          {/* <!-- Main Content --> */}
        </div>
        <div class="col-span-12 rounded-lg border border-gray-400 bg-black-200 p-16 sm:col-span-4">
          {/* <!-- Sidebar --> */}
        </div>
      </div>
    </div>
  );
}

export default BentoSquare;
