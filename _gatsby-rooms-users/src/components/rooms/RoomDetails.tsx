import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import InputLabel from '@material-ui/core/InputLabel'
import { roomListStore } from '../../stores/RoomList'
import TextInput from '../base/TextInput'
import EditButton from '../base/buttons/EditButton'
import SaveButton from '../base/buttons/SaveButton'

type Props = {
  path: string
  id?: string
}

function RoomDetails({ path, id }: Props) {
  const [isEditable, setIsEditable] = useState(false)
  const [isMutated, setIsMutated] = useState(false)

  const room = roomListStore.getById(Number(id))
  const [name, setName] = useState(room.name)

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

  const showEditButton = !isEditable
  const showSaveButton = isEditable
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

      {showEditButton &&
      <EditButton onClick={handleClickEdit}/>}

      {showSaveButton &&
      <SaveButton
        disabled={!isMutated}
        onClick={handleClickSave}
      />}
    </>
  )
}

export default observer(RoomDetails)
