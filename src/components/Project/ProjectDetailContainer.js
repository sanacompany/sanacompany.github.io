import React from 'react'
import { useParams } from 'react-router-dom'

import PROJECTS from 'constants/Projects'
import ProjectDetail from './ProjectDetail'

export default function ProjectDetailContainer() {
  const { name } = useParams()

  const info = PROJECTS.find((project) => project.slug === name)

  if (!info) return 'Not Found :('

  const { appStore, color, elements, name: projectName, playStore, type, website } = info

  return (
    <ProjectDetail
      appStore={appStore}
      backgroundColor={color}
      name={projectName}
      elements={elements}
      playStore={playStore}
      type={type}
      website={website}
    />
  )
}
