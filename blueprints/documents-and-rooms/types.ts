import { UserBaseData } from '../users/types'

export interface DocumentType {
  id: number
  name: string
  alias: string
  createdAt: string
}

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
  documentTypes: { alias: string }[]
}

export interface RoomSystemData {
  admins: UserBaseData[]
  users: UserBaseData[]
  labels: Label[]
}

export interface Room extends RoomBaseData, RoomSystemData {}
