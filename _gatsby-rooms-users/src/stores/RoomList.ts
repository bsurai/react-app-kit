import { RoomListModel } from '../models/RoomList'
import { roomListService } from '../service'

function createRoomList(service) {
  return RoomListModel.create(
    { items: [] },
    { service },
  )
}

export const roomListStore = createRoomList(roomListService)
