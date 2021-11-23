import React from 'react'
import List from '@material-ui/core/List'
import { observer } from 'mobx-react-lite'

import RoomListItem from './RoomListItem'


interface Props {
  path: string
  roomList: {
    items: any[]
  }
}

function RoomListPage({ roomList }: Props) {
  return (
    <List>
      {roomList.items.map((item) => <RoomListItem key={item.id} item={item}/>)}
    </List>
  )
}

export default observer(RoomListPage)
