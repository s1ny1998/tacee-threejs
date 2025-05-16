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
    url: '#',
    videoID: 'skReel'
  },
  {
    name: 'Prajwal',
    url: '#',
    videoID: 'aqReel'
  },
  {
    name: 'Bharath',
    url: '#',
    videoID: 'fbReel'
  },
  {
    name: 'Nandini',
    url: '#',
    videoID: 'feudiReel'
  },
  {
    name: 'Deepak',
    url: '#',
    videoID: 'claralunaReel'
  }
]

export const projects = createModel<RootModel>()({
  state: initialState
})
