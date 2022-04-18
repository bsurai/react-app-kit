import { RoomListModel } from '../models/RoomList';
import { roomService } from '../service';

function createRoomList(service) {
  return RoomListModel.create(
    { items: [] },
    { service },
  );
}

export const roomListStore = createRoomList(roomService);
