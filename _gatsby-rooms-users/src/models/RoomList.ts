import { types, Instance, getEnv, flow, cast } from 'mobx-state-tree'

export const RoomListItemModel = types.model({
    id: types.string,
    name: types.string,
    image: types.optional(types.string, ''),
    createdAt: types.Date,
  })
  .actions((self) => ({

    changeName(newName: string) {
      self.name = newName
    },

  }))

export const RoomListModel = types.model({
    items: types.optional(types.array(RoomListItemModel), []),
  })
  .actions((self) => ({

    add(room: IRoomListItem) {
      self.items.push(room)
    },

    getById(id: string) {
      return self.items.find((room) => room.id === id)
    },

    load: flow(function*() {
      const resp = yield getEnv(self).service.getList()
      self.items = cast(resp)
    }),

  }))

export interface IRoomListItem extends Instance<typeof RoomListItemModel> {}
export interface IRoomList extends Instance<typeof RoomListModel> {}
