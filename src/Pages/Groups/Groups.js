import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import GroupCard from "../../Components/Cards/GroupCard/GroupCard";
import sampleImage1 from "../../Assets/Images/sampleImg1.png";
import sampleImage2 from "../../Assets/Images/sampleImg2.png";
import { FiSearch } from "react-icons/fi";

const Groups = () => {
  const groupData = [
    {
      id: 1,
      img: sampleImage1,
      name: "SDS Labs",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      websiteLink: "",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
    {
      id: 2,
      img: sampleImage2,
      name: "DSG",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      websiteLink: "",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
    {
      id: 3,
      img: sampleImage2,
      name: "DSG",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      websiteLink: "",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
    {
      id: 4,
      img: sampleImage2,
      name: "DSG",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      websiteLink: "",
      linkedIn: "",
      facebook: "",
      instagram: "",
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
          <input className="search-input" placeholder="Search"/>
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
