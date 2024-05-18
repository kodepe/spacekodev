import { colors } from "@/constants/colors";

const DeleteAccount = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-light text-light bg-light"
              fill={"none"}
              viewBox="0 0 24 24"
              stroke={colors.link}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">
                Delete Your Acccount ?
              </div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                By deleting your account you will lose your all data
              </p>
            </div>
          </div>
          <button className="flex-no-shrink bg-error outline-none px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-error  text-light rounded-full">
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col p-8 bg-dark shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-primary text-light bg-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke={colors.link}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none text-light">
                Delete Your Acccount ?
              </div>
              <p className="text-sm text-light leading-none mt-1">
                By deleting your account you will lose your all data
              </p>
            </div>
          </div>
          <button className="flex-no-shrink bg-warning text-light px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-warning text-white rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteAccount;
