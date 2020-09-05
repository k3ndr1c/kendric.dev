import projectData from '../projects/data.json'

export function getProjectsData() {

  const allProjectData = projectData.map((proj, index) => {
    return {
      index,
      ...proj
    }
  })
  return allProjectData
}
