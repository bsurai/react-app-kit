async function getList() {
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
      createdAt: new Date('2021-03-21'),
      documentTypes: [
        { alias: 'income-fop-ua' },
        { alias: 'single-tax-report-ua' },
        { alias: 'task' },
      ],
    },
  ]
}

export const roomListService = {
  getList,
}
