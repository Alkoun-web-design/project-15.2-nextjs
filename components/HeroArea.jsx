
// import heroImage from "hero-min.webp";
// import Image from "next/image";

export default function Hero4 () {
  return (
    <>

      <div className="relative z-10 bg-white pb-[130px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pb-[180px] lg:pt-[230px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
              <div className="hero-content">
                <h1 className="mb-3 max-w-[480px] text-4xl font-bold leading-[1.208] text-dark dark:text-white sm:text-5xl">
                  Driving Business Success Through Strategy, Innovation, and Leadership
                </h1>

                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                 As a passionate business graduate with expertise in Marketing and Entrepreneurship, I help organizations unlock growth, optimize operations, and achieve measurable results. Let’s build the future of business together.
                </p>

                {/* <div>
                  <form className="mb-5 w-full rounded-[10px] border border-stroke bg-white px-[14px] py-[6px] shadow-2 dark:border-dark-3 dark:bg-dark-2 md:max-w-[490px]">
                    <div className="-ml-2 -mr-2 flex flex-wrap">
                      <div className="w-full p-2 sm:w-1/2 md:w-1/3">
                        <input
                          type="text"
                          name="keyword"
                          placeholder="Job Keyword"
                          className="h-[46px] w-full rounded-md border border-stroke bg-transparent px-4 text-sm text-body-color outline-none placeholder:text-dark-7 focus:bg-[#FCFDFE] focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6 dark:focus:bg-dark"
                        />
                      </div>
                      <div className="w-full p-2 sm:w-1/2 md:w-1/3">
                        <input
                          type="text"
                          name="location"
                          placeholder="Job Location"
                          className="h-[46px] w-full rounded-md border border-stroke bg-transparent px-4 text-sm text-body-color outline-none placeholder:text-dark-7 focus:bg-[#FCFDFE] focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6 dark:focus:bg-dark"
                        />
                      </div>
                      <div className="w-full p-2 md:w-1/3">
                        <button
                          type="submit"
                          className="w-full cursor-pointer rounded-md bg-[#f33f3f] px-5 py-[11px] font-medium text-white transition hover:bg-[#be3838]"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}

                {/* <p className="text-base font-medium text-body-color dark:text-dark-6">
                  Try Product Designer, Software Engineer etc.
                </p> */}
              </div>
            </div>
            <div className="hidden px-4 lg:block xl:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div
                className="absolute right-0 top-0 z-[-1] hidden h-full w-1/2 max-w-[720px] items-end justify-center bg-cover bg-top-left bg-no-repeat px-5 lg:flex"
                // style={{
                //   backgroundImage: `url('https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-4-bg.svg')`,
                // }}
              >
                <div>
                  <img
                    src="hero-min.webp"
                    alt="hero"
                    className="mx-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

