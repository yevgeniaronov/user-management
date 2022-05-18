const BaseTextInput = ({ fieldName, label, onChange, value, readOnly }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <input
        readOnly={readOnly}
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
export default BaseTextInput
