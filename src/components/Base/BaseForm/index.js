import BaseTextInput from '@components/Base/BaseTextInput'
import BaseCheckBox from '@components/Base/BaseCheckBox'

const BaseForm = ({ form, readOnly }) => {
  const components = {
    BaseTextInput: BaseTextInput,
    BaseCheckBox: BaseCheckBox,
  }

  const onChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <form>
      {form.map((formItem) => {
        const FieldComponent = components[formItem.component] || formItem.tag
        return (
          <FieldComponent
            disabled={readOnly}
            key={formItem.id || formItem.canViewOnly}
            {...formItem}
            onChange={onChange}
            className={formItem.stylingClasses}
          >
            {formItem.content}
          </FieldComponent>
        )
      })}
    </form>
  )
}
export default BaseForm
