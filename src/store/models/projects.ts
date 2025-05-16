import { createModel } from '@rematch/core'
import type { RootModel } from '../models'

type Project = {
  name: string
  url: string
  videoID: string
}

const initialState: Project[] = [
  {
    name: 'Sanmitra',
    url: 'sketchin',
    videoID: 'skReel'
  },
  {
    name: 'Prajwal',
    url: 'aquest',
    videoID: 'aqReel'
  },
  {
    name: 'Bharath',
    url: 'fastweb',
    videoID: 'fbReel'
  },
  {
    name: 'Nandini',
    url: 'feudi',
    videoID: 'feudiReel'
  },
  {
    name: 'Deepak',
    url: 'claraluna',
    videoID: 'claralunaReel'
  }
]

export const projects = createModel<RootModel>()({
  state: initialState
})
