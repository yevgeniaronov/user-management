import { useEffect, useState } from 'react'

const useGenerateUserForm = ({ user = {}, hospitals }) => {
  const { id, first_name, last_name, email, permissions = {} } = user
  const { hospitals: permittedHospitals, all_hospitals } = permissions
  const [userPermissionsForm, setUserPermissionsForm] = useState([])
  const generateUserForm = () => {
    const form = []
    form.push({
      component: 'BaseCheckBox',
      label: 'All hospitals',
      value: all_hospitals || false,
      id: `allHospitals${id}`,
    })
    form.push({
      stylingClasses: 'text-lg',
      tag: 'p',
      content: 'can view only:',
      id: `canViewOnly${id}`,
    })
    hospitals.forEach((hospital) => {
      form.push({
        component: 'BaseCheckBox',
        label: hospital.name,
        value:
          permittedHospitals?.some((item) => item === hospital.id) || false,
        ...hospital,
      })
    })
    setUserPermissionsForm(form)
  }

  useEffect(() => {
    generateUserForm()
  }, [])

  return userPermissionsForm
}

export default useGenerateUserForm
