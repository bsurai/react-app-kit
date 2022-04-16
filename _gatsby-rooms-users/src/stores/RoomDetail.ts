import { RoomDetailModel } from '../models/RoomDetail'

export const roomDetailStore = RoomDetailModel.create({
  id: 0,
  name: '',
  image: '',
  createdAt: 0,
  documentTypes: [], // mockDocumentTypes(),
})

function mockDocumentTypes() {
  return [
    {
      id: 1,
      name: 'family',
      createdAt: new Date('2021-02-02'),
      documentTypes: [
        { alias: 'task' },
      ],
    },
    {
      id: 2,
      name: 'work',
      createdAt: new Date('2021-03-25'),
      documentTypes: [
        { alias: 'income-fop-ua' },
        { alias: 'single-tax-report-ua' },
        { alias: 'task' },
      ],
    },
  ]
}
