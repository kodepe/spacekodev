import Link from "next/link";

const HeroBlock1 = () => {
  return (
    <div className="bg-primary">
      <div className="bg-gradient-to-b from-dark/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="flex justify-center">
            <a
              className="group flex flex-row items-center justify-between bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
              href="../figma.html"
            >
              <p className="me-2 inline-block text-light text-center text-sm">
                Preline UI Figma is live.
              </p>
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full font-semibold text-light text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {`Now it's easier than ever to build products`}
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-light">
              Preline is a large open-source project, crafted with Tailwind CSS
              framework by Hmlstream.
            </p>
          </div>

          <div className="text-center flex flex-row items-center justify-center">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center   bg-error shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="/dashboard"
            >
              Get started
              <svg
                className="flex-shrink-0 w-4 h-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock1;
