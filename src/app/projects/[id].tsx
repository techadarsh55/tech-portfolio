"use client";
import React from "react";

async function fetchProjectData(id: string) {
    const res = await fetch(`https://ymsgjw2uo3hq4bbwbteds5svpy0kgbcb.lambda-url.us-east-1.on.aws/${id}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch project data');
    }
    return res.json();
}


export default async function ProjectPage({params} : {params:  {id: string}}) {
    const projects = await fetchProjectData(params.id);
    
    console.log("Fetched single project data:", projects);

    return (
        <div>
            <h1>Project ID: {projects}</h1>
        </div>
    );
}