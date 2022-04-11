import React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { observer } from 'mobx-react-lite'
import RoomListItem from './RoomListItem'
import map from 'lodash/map';


interface Props {
  path: string
  roomList: {
    items: any[]
  }
}

function RoomListPage({ roomList }: Props) {
  return (
    <List
      subheader={<ListSubheader>Rooms</ListSubheader>}
    >
      {map(roomList.items, (o) => <RoomListItem key={o.id} item={o}/>)}
    </List>
  )
}

export default observer(RoomListPage)
