import { notFound } from "next/navigation";
import Image from "next/image";

async function fetchProjectData(projectId: string) {
    const res = await fetch(`https://t1c9s2lsj8.execute-api.us-east-1.amazonaws.com/default/MyProjectDetails?id=${projectId}`);
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export default async function ProjectDetail({ params }: {params: Promise<{projectId: string}>;}) {
  const projectId = (await params).projectId; // directly available
  console.log("Project ID:", projectId);
  const projectData = await fetchProjectData(projectId);
  console.log("Fetched project data:", projectData);

  return (
    <div>
      <h1>Project Details: {projectId}</h1>
    </div>
  );
}
