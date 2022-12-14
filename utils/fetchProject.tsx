import { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '../typing';

export const fetchProject = async () => {
  const res = await fetch(
    `https://hipproject-iuu08w7a0-haicaumuoi.vercel.app/api/project`
  );

  const data = await res.json();
  const projects: Project[] = data;
  console.log(projects);
  return projects;
};
