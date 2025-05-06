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
    <section className=" py-16 bg-gray-50">
      <div className="px-4 md:px-12 lg:px-0 lg:w-11/12 mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Supported Organizations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {orgs.map((datas) => (
            <OrganizationCard key={datas.id} datas={datas} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
