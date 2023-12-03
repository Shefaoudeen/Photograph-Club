import { contact_detail } from "../Constants";
import { marker } from "../assets/icons";
import Contact_card from "../Components/Contact_card";

const Contact = () => {
  return (
    <section>
      <div className="h-screen w-full flex-1 flex justify-center items-center flex-col">
        <div className="h-[35%]">
          <h1 className="text-[60px] font-sans font-bold text-center">
            CONTACT
          </h1>
          <div className="flex flex-1 gap-5 mt-5 h-[50px]">
            {contact_detail.map((items) => (
              <Contact_card
                Icon={items.Icon}
                title={items.title}
                Description={items.Description}
              />
            ))}
          </div>
        </div>
        <div className="h-[60%] flex flex-1 gap-10 w-[100%] py-2 mt-5">
          <div className="w-[40%] flex justify-center ">
            <iframe
              height={400}
              width={400}
              src="https://maps.google.com/maps?q=pondicherry%20engineering%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
          <div className="w-[60%]">
            <h1>Any Queries ?</h1>
            <input type="text" placeholder="Enter your Comments" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
