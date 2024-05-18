import "./styles.css";
const WordAnimation = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-bold text-white">
      <div className=" text-center space-y-12">
        <div className="text-center text-5xl font-bold">
          Services offered
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span className="animate-word col-span-full row-span-full">
              Flutter
            </span>
            <span className="animate-word-delay-1 col-span-full row-span-full">
              Django
            </span>
            <span className="animate-word-delay-2 col-span-full row-span-full">
              Website
            </span>
            <span className="animate-word-delay-3 col-span-full row-span-full">
              VueJS
            </span>
            <span className="animate-word-delay-4 col-span-full row-span-full">
              NuxtJS
            </span>
          </div>
        </div>
        <p className=" text-white">
          Want to hire me for work ping me{" "}
          <a className="underline" href="mailto:ponnamkarthik3@gmail.com">
            mail here
          </a>
        </p>
      </div>
    </div>
  );
};

export default WordAnimation;
