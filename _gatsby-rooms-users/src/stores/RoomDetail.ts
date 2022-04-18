import { RoomDetailModel } from '../models/RoomDetail';
import { roomService } from '../service';

function createRoomDetail(service) {
  return RoomDetailModel.create(
    {
      id: '',
      name: '',
      image: '',
      createdAt: 0,
      documentTypes: [], // mockDocumentTypes(),
    },
    { service },
  )
}

export const roomDetailStore = createRoomDetail(roomService);
