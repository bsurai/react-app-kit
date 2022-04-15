import { types } from 'mobx-state-tree'

export const DocumentTypeListItem = types.model({
    id: types.number,
    name: types.string,
    alias: types.string,
    image: types.optional(types.string, ''),
    createdAt: types.Date,
    
  })
  .actions((self) => ({

    // changeName(newName: string) {
    //   self.name = newName
    // },

  }))

export const DocumentTypeList = types.model({
    items: types.optional(types.array(DocumentTypeListItem), []),
  })
  .actions((self) => ({

    add(documentType) {
      self.items.push(documentType)
    },

    getById(id: number) {
      return self.items.find((documentType) => documentType.id === id)
    },

  }))
