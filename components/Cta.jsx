// import { Link } from "react-router-dom";
// import ShapeSeven from "./Shapes/ShapeSeven.jsx";
// import ShapeEight from "./Shapes/ShapeEight.jsx";
import ShapeNine from "./Shapes/ShapeNine.jsx";
import ShapeTen from "./Shapes/ShapeTen.jsx";

export default function Cta () {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#f33f3f] py-20 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[700px] text-center">
                  <h2 className="mb-6 text-2xl font-semibold leading-snug text-white ">
                    I am open to Internships or entry-level roles in marketing and administration.
                  </h2>
                  <h2 className="mb-6 text-2xl font-semibold leading-snug text-white ">
                    I am also eager to contribute creative and analytical skills to a professional team.
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-white md:pr-10">
                    
                  </p>
                  {/* <Link
                    to="#"
                    className="inline-block rounded bg-[#13C296] px-7 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  >
                    Explore Now
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0">
            <ShapeNine />
          </span>
          <span className="absolute bottom-0 right-0">
            <ShapeTen />
          </span>
        </div>
      </section>
    </>
  );
};
