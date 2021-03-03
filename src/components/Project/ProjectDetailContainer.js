import React from 'react'
import { useParams } from 'react-router-dom'

import { toDashCase } from 'utils/String'
import PROJECTS from 'constants/Projects'
import ProjectDetail from './ProjectDetail'

export default function ProjectDetailContainer() {
  const { name } = useParams()

  const info = PROJECTS.find((project) => (
    toDashCase(project.name) === toDashCase(name)
  ))

  if (!info) return 'Not Found :('

  const {
    color,
    cover,
    description,
    name: projectName,
    type,
    website,
  } = info

  return (
    <ProjectDetail
      backgroundColor={color}
      cover={cover}
      description={description}
      name={projectName}
      type={type}
      website={website}
    />
  )
}
