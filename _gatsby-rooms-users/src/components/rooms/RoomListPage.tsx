import React from 'react'
import { observer } from 'mobx-react-lite'
import map from 'lodash/map';

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import RoomListItem from './RoomListItem'

import { IRoomList, IRoomListItem } from '../../models/RoomList'

// import { RoomListModel } from '../../models/RoomList'

interface Props {
  path: string
  roomList: IRoomList
}

function RoomListPage({ roomList }: Props) {
  return (
    <List
      subheader={<ListSubheader>Rooms</ListSubheader>}
    >
      {map(roomList.items, (o: IRoomListItem) => <RoomListItem key={o.id} item={o}/>)}
    </List>
  )
}

export default observer(RoomListPage)
