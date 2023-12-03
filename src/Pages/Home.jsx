import { Logo, halfCamera } from "../assets";

const Home = () => {
  return (
    <section className="px-5">
      <div className="w-[100%] flex-1 flex items-center justify-around max-sm:flex-col-reverse">
        <div className="w-[40%] flex flex-col max-sm:text-sm max-sm:w-full">
          <p className="text-center tracking-wide text-xl z-10 max-sm:py-4">
            Puducherry Technological University's
          </p>
          <div className="max-sm:leading-[100px]">
            <h1 className="font-bold font-sans text-[70px] text-center drop-shadow-2xl z-10">
              <span className="text-red-500">P</span>
              HO
              <span className="text-red-500">T</span>
              OGRAPHY
            </h1>
            <h1 className="font-bold font-sans text-[70px] text-center z-10">
              CL
              <span className="text-red-500">U</span>B
            </h1>
          </div>
          <div className="border-2 p-5 rounded-3xl max-sm:my-[50px] z-10 drop-shadow-2xl mt-5 flex flex-col bg-gradient-to-tr from-white to-slate-100">
            <h1 className="font-bold font-sans text-3xl">Missions</h1>
            <div className="w-full flex">
              <div className="w-[10%]"></div>
              <p className="mt-5 leading-8 w-[90%] flex text-start text-[18px]">
                To provide a supportive environment for the students interested
                in photography to share their creativity, knowledge and passion
                for photography.
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-black drop-shadow-2xl   z-10">
          <img
            src={Logo}
            width={500}
            className="border-2 border-black rotate-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
