import React from 'react'
import { useParams } from 'react-router-dom'

import PROJECTS from 'constants/Projects'
import ProjectDetail from './ProjectDetail'

export default function ProjectDetailContainer() {
  const { name } = useParams()

  const info = PROJECTS.find((project) => project.slug === name)

  if (!info) return 'Not Found :('

  const { color, elements, name: projectName, type, website } = info

  return (
    <ProjectDetail
      backgroundColor={color}
      name={projectName}
      elements={elements}
      type={type}
      website={website}
    />
  )
}
