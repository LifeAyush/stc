import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import GroupCard from "../../Components/Cards/GroupCard/GroupCard";
import groupLogo from "../../Assets/Images/groupLogo.svg";
import { FiSearch } from "react-icons/fi";

const Groups = () => {
  const groupData = [
    {
      id: 1,
      logo: groupLogo,
      name: "SDS Labs",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      notion: "",
      linkedIn: "",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
    },
    {
      id: 2,
      logo: groupLogo,
      name: "DSG",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      notion: "",
      linkedIn: "",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
    },
    {
      id: 3,
      logo: groupLogo,
      name: "DSG",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      notion: "",
      linkedIn: "",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
    },
    {
      id: 4,
      logo: groupLogo,
      name: "DSG",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      notion: "",
      linkedIn: "",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
    },
  ];
  return (
    <div className="page">
      <Navbar />
      <div className="heading-section">
        <PageHeading
          title="Campus Groups"
          subTitle="These are workspaces of tech at IITR"
        />
        <div className="search">
          <div className="search-icon">
            <FiSearch />
          </div>
          <input className="search-input" placeholder="Search" />
        </div>
      </div>
      <div className="card-grid">
        {groupData.map((group, id) => {
          return <GroupCard key={id} data={group} />;
        })}
      </div>
    </div>
  );
};

export default Groups;
