import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import InputLabel from '@material-ui/core/InputLabel'
import { roomListStore } from '../../stores/RoomList'
import TextInput from '../base/TextInput'
import EditButton from '../base/EditButton'

type Props = {
  path: string
  id?: string
}

function RoomDetails({ path, id }: Props) {
  const [isEditable, setIsEditable] = React.useState(false)

  useEffect(() => () => {
    setIsEditable(false)
  }, [id])

  const room = roomListStore.getById(Number(id))

  function handleClickEdit() {
    setIsEditable(true)
  }

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
        value={room?.name}
        readOnly={!isEditable}
      />

      {!isEditable &&
      <EditButton onClick={handleClickEdit}/>}
    </>
  )
}

export default observer(RoomDetails)
