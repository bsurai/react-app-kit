import { map, find, pick } from 'lodash';

const rooms: any[] = [];

async function getList() {
  return map(rooms, (r) => pick(r, ['id', 'name', 'createdAt']))
}

async function getById(id: string) {
  return find(rooms, (r) => r.id === id);
}

export const documentService = {
  getList,
  getById,
}
