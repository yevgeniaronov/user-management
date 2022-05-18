import UserCard from './components/UserCard'
import { useState, useEffect } from 'react'
import UserDialog from './components/UserDialog'
const Users = () => {
  // console.log(props)
  const [dialog, toggleDialog] = useState(false)
  const [dialogForm, setDialogForm] = useState([])
  const [users, setUsers] = useState([])
  const [hospitals, setHospitals] = useState([])

  const onAddUserClick = (form) => {
    setDialogForm([...require('@config/forms/common-form.json'), ...form])
    toggleDialog((dialog) => !dialog)
  }
  const onEditUserClick = (form) => {
    setDialogForm([...require('@config/forms/common-form.json'), ...form])
    toggleDialog((dialog) => !dialog)
  }

  const fetchUsers = async () => {
    try {
      const users = await window.medAPI.users.list()
      setUsers(users)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchHospitals = async () => {
    try {
      const hospitals = await window.medAPI.hospitals.list()
      setHospitals(hospitals)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchHospitals()
  }, [])

  return (
    <div>
      {hospitals?.length ? (
        <UserDialog
          hospitals={hospitals}
          dialog={dialog}
          toggleDialog={toggleDialog}
          dialogForm={dialogForm}
          onAddUserClick={onAddUserClick}
        ></UserDialog>
      ) : null}
      <div className="mt-4 gap-7 flex flex-wrap">
        {hospitals.length
          ? users.map((user) => (
              <UserCard
                onEditClick={(form) => onEditUserClick(form)}
                key={user.id}
                user={user}
                hospitals={hospitals}
              ></UserCard>
            ))
          : null}
      </div>
    </div>
  )
}

export default Users
