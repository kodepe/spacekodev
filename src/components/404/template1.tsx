import Image from "next/image";

const NotFound1 = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-5xl text-primary font-dark font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            {`Sorry we couldn't find the page you're looking for`}
          </p>

          <a
            href="#"
            className="px-5 inline py-3 text-sm font-medium leading-5 outline-none border-none shadow-2xl text-white transition-all duration-400 rounded-lg focus:outline-none bg-primary text-light active:bg-error hover:bg-error"
          >
            back to homepage
          </a>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <Image
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            className="w-full"
            alt="Page not found"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default NotFound1;
