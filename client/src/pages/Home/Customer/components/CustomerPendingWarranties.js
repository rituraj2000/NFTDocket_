const getStatus = (statusNumber) => {
  if (statusNumber === "0") {
    return "Verified";
  } else if (statusNumber === "1") {
    return "Active";
  } else if (statusNumber === "2") {
    return "Pending";
  } else {
    return "Expired";
  }
};

const CustomerPendingWarrantiesDetailsWidget = ({ warranty }) => {
  return (
    <div className="flex w-full">
      <div className=" w-2/5 h-24 border-b-2 border-gray-100  text-xs pt-10 text-center">
        0x21f7f174d21CA68a7a38e8291e4F21921FF6C049
      </div>
      <div className=" w-1/5 h-24 pt-10 border-b-2 border-r-2 border-l-2 border-gray-100 text-center text-blue-700 justify-center items-center">
        {getStatus(warranty.status) === "Pending" && (
          <button className="py-1 px-2 shadow-md bg-white text-xs rounded-md">
            Claim
          </button>
        )}
        {(getStatus(warranty.status) === "Active" ||
          getStatus(warranty.status) === "Expired") &&
          getStatus(warranty.status)}
      </div>
      <div className=" w-2/5 h-24 pt-10 border-b-2 border-gray-100 text-center text-sm">
        {warranty.tokenId}
      </div>
    </div>
  );
};

export default CustomerPendingWarrantiesDetailsWidget;
