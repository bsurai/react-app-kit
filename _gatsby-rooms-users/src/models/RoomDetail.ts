import { types, getEnv, flow, cast, Instance } from 'mobx-state-tree'
import { DocumentTypeListItemModel } from './DocumentTypeList';

export const RoomDetailModel = types.model({
    id: types.string,
    name: types.string,
    image: types.optional(types.string, ''),
    createdAt: types.Date,
    documentTypes: types.optional(types.array(DocumentTypeListItemModel), []),
  })
  .actions((self) => ({

    changeName(newName: string) {
      self.name = newName
    },

    load: flow(function*(id: string) {
      if (self.id === id) {
        return;
      }

      self.id = id;
      const resp = yield getEnv(self).service.getById(id);

      if (resp.id !== self.id) {
        return;
      }

      self.name = resp.name;
      self.image = resp.image;
      self.createdAt = resp.createdAt;
      self.documentTypes = cast(resp.documentTypes);
    }),

  }))

  export interface IRoomDetail extends Instance<typeof RoomDetailModel> {}
