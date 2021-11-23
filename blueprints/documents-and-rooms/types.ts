import { UserBaseData } from '../users/types'

export interface DocumentBase {
  id: number
  createdAt: string
}

export interface Document extends DocumentBase {
  roomId: string
  authorId: string
  labels: Label[]
}

export interface Label {
  text: string
  color: string
}

export interface RoomBaseData extends DocumentBase {
  name: string
  author: UserBaseData
  image?: string
}

export interface RoomSystemData {
  admins: UserBaseData[]
  users: UserBaseData[]
  labels: Label[]
}

export interface Room extends RoomBaseData, RoomSystemData {}
