import React from 'react'
import List from '@material-ui/core/List'
import { observer } from 'mobx-react-lite'

import RoomListItem from './RoomListItem'


type Props = {
  roomList: {
    items: any[]
  }
}

function RoomList({ roomList }: Props) {
  return (
    <List>
      {roomList.items.map((item) => <RoomListItem key={item.id} item={item}/>)}
    </List>
  )
}

export default observer(RoomList)
