import { Sandeep, Raja } from "../assets";
import Bearers from "../Components/Bearers";
import { bearers_details } from "../Constants";

const Officer = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center flex-col items-center">
      <h1 className="text-center text-3xl font-bold h-[10%]">OFFICE BEARERS</h1>
      <div className="flex gap-5">
        {bearers_details.map((member) => (
          <Bearers
            image={member.image}
            name={member.name}
            role={member.role}
            department={member.department}
            insta={member.insta}
          />
        ))}
      </div>
    </div>
  );
};

export default Officer;
