import { map, find, pick } from 'lodash';
import { IRoomDetail } from '../../models/RoomDetail';

const rooms: IRoomDetail[] = [
  {
    id: '1',
    name: 'family',
    createdAt: new Date('2021-02-02'),
    documentTypes: [
      {
        id: '3',
        name: 'Tasks',
        alias: 'task',
        image: '',
        createdAt: new Date('2021-03-24'),
      },
    ],
  },
  {
    id: '2',
    name: 'work',
    createdAt: new Date('2021-03-21'),
    documentTypes: [
      {
        id: '1',
        name: 'Income',
        alias: 'income-fop-ua',
        image: '',
        createdAt: new Date('2021-02-02'),
      },
      {
        id: '2',
        name: 'Tax Report',
        alias: 'single-tax-report-ua',
        image: '',
        createdAt: new Date('2021-03-23'),
      },
      {
        id: '3',
        name: 'Tasks',
        alias: 'task',
        image: '',
        createdAt: new Date('2021-03-24'),
      },
    ],
  },
];

async function getList() {
  return map(rooms, (r) => pick(r, ['id', 'name', 'createdAt']))
}

async function getById(id: string) {
  return find(rooms, (r) => r.id === id);
}

export const roomService = {
  getList,
  getById,
}
