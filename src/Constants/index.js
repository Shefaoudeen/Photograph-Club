import { envelop, marker, phone } from "../assets/icons";
import { Sandeep, Raja, Shefa } from "../assets";

const contact_detail = [
  {
    title: "ADDRESS",
    Description: `Pondicherry Engineering College,
  Pillaichavady, Puducherry - 605 014`,
    Icon: marker,
  },
  { title: "EMAIL", Description: `Email : photoclub@pec.edu`, Icon: envelop },
  { title: "PHONE", Description: `+91 9842306633`, Icon: phone },
];

const bearers_details = [
  {
    name: "SANDEEP",
    role: "Social Media Executive",
    department: "B.Tech - CSE - III Year",
    image: Sandeep,
    insta: "https://www.instagram.com/_.sandeep.07._/",
  },
  {
    name: "RAJAVARDHINI",
    role: "Editorial Executive",
    department: "B.Tech - ECE - III Year",
    image: Raja,
    insta: "https://www.instagram.com/_.pappukrishna._/",
  },
];

export { contact_detail, bearers_details };
