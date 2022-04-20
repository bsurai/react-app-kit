import React from 'react'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import { observer } from 'mobx-react-lite'
import { navigate } from "gatsby"
import { getRoomIdPath } from '../../utils/url'
import { IDocumentListItem } from '../../models/DocumentList'

type Props = {
  item: IDocumentListItem
}

function DocumentListItem({ item }: Props) {

  function handleClick() {
    navigate(getRoomIdPath(item.id))
  }

  return (
    <ListItem
      button
      divider
      onClick={handleClick}
    >
      {/*
      <ListItemAvatar>
        <Avatar src={item.image}/>
      </ListItemAvatar>
      */}
      <ListItemText primary={item.name}/>
    </ListItem>
  )
}

export default observer(DocumentListItem)
