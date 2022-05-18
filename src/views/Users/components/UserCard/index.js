import styles from './UserCard.module.scss'
import BaseButton from '@components/Base/BaseButton'
import { Edit, Delete, PersonOutline } from '@material-ui/icons'
import { SvgIcon } from '@material-ui/core'
import BaseCard from '@components/Base/BaseCard'
import fullName from '@helpers/fullName'
import BaseForm from '@components/Base/BaseForm'
import useGenerateUserForm from 'hooks/useGenerateUserForm'

const Avatar = () => {
  return (
    <div className="bg-gray-300 max-w-max rounded-full">
      <SvgIcon component={PersonOutline}></SvgIcon>
    </div>
  )
}

const UserCard = ({ user, hospitals, onEditClick }) => {
  const { id, first_name, last_name, email, permissions } = user
  const userForm = useGenerateUserForm({ hospitals, user })

  return (
    <BaseCard className={`${styles['user-card']}`}>
      <BaseCard.Header className="flex flex-col">
        <div className={`${styles['user-card__actions']} self-end`}>
          <div className="flex">
            <BaseButton onClick={() => onEditClick(userForm)}>
              <SvgIcon component={Edit}></SvgIcon>
            </BaseButton>
            <BaseButton>
              <SvgIcon component={Delete}></SvgIcon>
            </BaseButton>
          </div>
        </div>
      </BaseCard.Header>
      <BaseCard.Body>
        <div
          className={`${styles['user-card']} shadow-lg p-3 rounded flex flex-col`}
        >
          <div className="user-card__content flex justify-center flex-col items-center">
            <div
              className={`${styles['user-card__content--user-profile']} text-center flex flex-col items-center`}
            >
              <Avatar></Avatar>
              <p>{fullName(first_name, last_name)}</p>
              <p>{email}</p>
            </div>
            <div className="user-card__content--user-permissions divide-y divide-yellow-500">
              <p className="text-lg uppercase">permissions</p>
              {userForm?.length && (
                <BaseForm readOnly={true} form={userForm}></BaseForm>
              )}
            </div>
          </div>
        </div>
      </BaseCard.Body>
    </BaseCard>
  )
}

export default UserCard
