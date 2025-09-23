"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Shortcut from "@/components/Shortcut";

async function fetchProjectData(projectId: string) {
  

  const res = await fetch(
    `https://t1c9s2lsj8.execute-api.us-east-1.amazonaws.com/default/MyProjectDetails?id=${projectId}`
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default function ProjectDetail({ params }: { params: Promise<{projectId: string }> }) {
  const [projectDetail, setProjectDetail] = useState<any>(null);
  const router = useRouter();

  const actualParams = React.use(params);

  useEffect(() => {
    async function getData() {
      const projectData = await fetchProjectData(actualParams.projectId);
      console.log(projectData)
      if (projectData && projectData.length > 0) {
        setProjectDetail(projectData[0]);
      }
    }
    getData();
  }, [actualParams.projectId]);

  if (!projectDetail) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <>
    <div className="p-10 pb-20 min-h-screen">
      <div>
        <div className="flex justify-between">
          <span className="text-gray-500">Website Demo</span>
          {projectDetail.links? 
            <a href={projectDetail.links} target="_blank" className="text-white bg-[#0064ec] px-4 p-1 font-bold rounded-3xl cursor-pointer">Live</a>
          :
            <span className="text-white bg-[#f14e4e] px-4 p-1 font-bold rounded-3xl cursor-pointer">Not Production</span>
          }
        </div>
        <h1 className="text-2xl font-bold pb-2">{projectDetail.name}</h1>
        <p className="text-md text-gray-500 pb-4">{projectDetail.description}</p>
        <Image
          src={projectDetail.image}
          alt={projectDetail.name}
          width={512}
          height={512}
          className="w-full rounded-2xl mb-3 cursor-pointer"
          onClick={() => router.push(projectDetail.links)}
           />
        
        <div className="flex flex-wrap gap-5 lg:gap-8 md:gap-5 sm:gap-7 justify-center mt-10 mb-10 text-center w-full">
            <div>
              <p className="text-xl text-[#0064ec] font-bold">{projectDetail.status}</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Status</p>
            </div>
            <hr  className="h-[54px] bg-[#0064ec] w-[2px]"/>
            <div>
              <p className="text-xl text-[#0064ec] font-bold">{projectDetail.role}</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Role</p>
            </div>
            <hr  className="h-[54px] bg-[#0064ec] w-[2px]"/>
            <div>
              <p className="text-xl text-[#0064ec] font-bold">{projectDetail.type}</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Type</p>
            </div> 
            <hr  className="h-[54px] bg-[#0064ec] w-[2px]"/>
            <div>
              <p className="text-xl text-[#0064ec] font-bold">{projectDetail.start_date} - {projectDetail.end_date}</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Duration</p>
            </div>            
          </div>
          <hr className="mb-10"/>
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold">Technologies <span className="text-[#0064ec]">I Use</span></h1>
            <br/>
            <div className="flex flex-wrap gap-4 justify-center">
              {projectDetail.technologies?.map((item: any) => (
                <span className="bg-[#0064ec] text-white font-semibold px-3 p-2 rounded-3xl" key={item}>{item}</span>
              ))}
            </div>
          </div>
          <hr className="mb-8"/>
          <h1 className="mb-4 font-bold text-2xl">Responsibilities</h1>
          <div>
            <ul className="list-decimal ml-5">
              {projectDetail.points?.map((item: any) => (
                <li className="text-md font-semibold pb-4" key={item}>{item}</li>
              ))}
            </ul>
          </div>

      </div>  
    </div>
    <Shortcut />
    </>
  );
}