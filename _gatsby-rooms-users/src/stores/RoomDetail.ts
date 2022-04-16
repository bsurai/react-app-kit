import { RoomDetailModel } from '../models/RoomDetail'

export const roomDetailStore = RoomDetailModel.create({
  id: 0,
  name: '',
  image: '',
  createdAt: 0,
  documentTypes: [], // mockDocumentTypes(),
})
