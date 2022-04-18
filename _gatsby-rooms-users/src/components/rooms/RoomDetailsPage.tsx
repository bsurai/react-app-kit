import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { navigate } from 'gatsby'
import map from 'lodash/map'
import filter from 'lodash/filter'
import find from 'lodash/find'

import InputLabel from '@material-ui/core/InputLabel'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import TextInput from '../base/TextInput'
import EditButton from '../base/buttons/EditButton'
import SaveButton from '../base/buttons/SaveButton'
import CloseButton from '../base/buttons/CloseButton'
import CancelButton from '../base/buttons/CancelButton'
import DocumentTypeListItem from '../document-types/DocumentTypeListItem'

import { roomListStore } from '../../stores/RoomList'
import { getRoomLisPath } from '../../utils/url'
import { IRoomDetail } from '../../models/RoomDetail'

type Props = {
  path: string
  id?: string
  roomDetail: IRoomDetail // similar to RoomDetailModel
}

function RoomDetailsPage({ id, roomDetail }: Props) {
  const [isEditable, setIsEditable] = useState(false)
  const [isMutated, setIsMutated] = useState(false)

  const room = roomListStore.getById(id)
  const [name, setName] = useState(room.name)

  useEffect(() => {
    roomDetail.load(id)
  }
  , [id])


  useEffect(() => {
    setName(room.name)

    return () => {
      setIsEditable(false)
      setIsMutated(false)
    }
  }, [room])

  

  function handleClickEdit() {
    setIsEditable(true)
  }

  function handleClickSave() {
    room.changeName(name)
    setIsMutated(false)
    setIsEditable(false)
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
    setIsMutated(true)
  }

  function handleClickCancel() {
    setName(room.name)
    setIsMutated(false)
    setIsEditable(false)
  }

  function handleClickClose() {
    navigate(getRoomLisPath())
  }

  const showEditButton = !isEditable
  const showSaveButton = isEditable
  const showCancelButton = isEditable
  const showCloseButton = !isEditable

  const disableSaveButton = !isMutated
  const disableCancelButton = !isMutated

  return (
    <>
      <InputLabel>Room</InputLabel>

      <TextInput
        label='ID'
        value={room?.id}
        readOnly
      />
      
      <TextInput
        label='Name'
        value={name}
        readOnly={!isEditable}
        onChange={handleChangeName}
      />

      {/* ============== Buttons ============ */}
      <EditButton
        display={showEditButton}
        onClick={handleClickEdit}
      />

      <SaveButton
        display={showSaveButton}
        disabled={disableSaveButton}
        onClick={handleClickSave}
      />

      <CancelButton
        display={showCancelButton}
        disabled={disableCancelButton}
        onClick={handleClickCancel}
      />

      <CloseButton
        display={showCloseButton}
        disabled={isMutated}
        onClick={handleClickClose}
      />

      {/* ========= Document Types ========= */}
      <List
        subheader={<ListSubheader>Docements</ListSubheader>}
      >
        {map(roomDetail.documentTypes, (o) => 
        <DocumentTypeListItem
          key={o.alias}
          roomId={id}
          item={o}
        />)}
      </List>
    </>
  )
}

export default observer(RoomDetailsPage)
