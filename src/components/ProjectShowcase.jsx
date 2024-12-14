
"use client";
import React from "react";

const ProjectShowcase = ({ project }) => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.media.map((media, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img src={media} alt={`Media ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>{project.description}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mr-4">GitHub</a>
        <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Live Preview</a>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc ml-5">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectShowcase;
