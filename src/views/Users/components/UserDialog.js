import BaseDialog from '@components/Base/BaseDialog'
import BaseButton from '@components/Base/BaseButton'
import BaseForm from 'components/Base/BaseForm'
import useGenerateUserForm from 'hooks/useGenerateUserForm'
const UserDialog = ({
  dialog,
  toggleDialog,
  dialogForm,
  onAddUserClick,
  hospitals,
}) => {
  const newUserForm = useGenerateUserForm({ hospitals })
  return (
    <div>
      {dialog ? (
        <BaseDialog toggleDialog={toggleDialog} show={dialog}>
          <BaseDialog.Title>Title</BaseDialog.Title>
          <BaseDialog.Body>
            <BaseForm form={dialogForm}></BaseForm>
          </BaseDialog.Body>
        </BaseDialog>
      ) : null}
      <BaseButton
        onClick={() => onAddUserClick(newUserForm)}
        styles="border-2 border-blue-700 p-1 pl-3 pr-3 rounded text-blue-700 text-center"
      >
        + Add New User
      </BaseButton>
    </div>
  )
}

export default UserDialog
