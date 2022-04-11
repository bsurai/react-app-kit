import { RoomList } from '../models/RoomList'

export const roomListStore = RoomList.create({
  items: mockItems(),
})

function mockItems() {
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
