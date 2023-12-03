import { PTU } from "../assets";

const College = () => {
  return (
    <section className="px-5">
      <div className="w-full h-screen flex-1 flex items-center justify-center">
        <div className="w-[50%] flex justify-center -rotate-3 ">
          <img
            src={PTU}
            width={600}
            className="rounded-3xl border-4 border-grey drop-shadow-xl"
          />
        </div>
        <div className="w-[50%] h-screen flex justify-center items-center">
          <div className="px-10 h-[60%] border-2 rounded-3xl shadow-2xl py-5 flex flex-col justify-center  bg-gradient-to-tr from-white to-slate-100">
            <div>
              <h1 className="text-[50px] font-bold font-sans text-center mb-8">
                ABOUT <span className="text-red-500">PTU</span>
              </h1>
            </div>
            <div>
              <p>
                Puducherry Technological University (PTU) is the first state
                University of Union Territory of Puducherry. It seamlessly came
                into existence on 5th September 2020 upon the elevation of
                erstwhile Pondicherry Engineering College - PEC (established in
                the year 1985 under the 7th five-year plan) with the University
                status. PTU began its journey with a position of pre-eminence
                and rightly stands as one of the finest engineering schools
                offering Bachelors, Masters and Doctoral study programmes in the
                prominent disciplines of Engineering/Technology, Science,
                Management and Entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;
