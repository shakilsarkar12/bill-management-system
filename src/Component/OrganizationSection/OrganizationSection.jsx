import React, { useEffect, useState } from "react";
import OrganizationCard from "../OrganizationCard/OrganizationCard";

const OrganizationSection = () => {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    fetch("/organization.json")
      .then((res) => res.json())
      .then((data) => setOrgs(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Supported Organizations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {orgs.map((datas) => (
          <OrganizationCard key={datas.id} datas={datas} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationSection;
