const BaseCheckBox = (props) => {
  return (
    <div className={`${props.className} flex justify-center items-center`}>
      <input {...props} type="checkbox" defaultChecked={props.value} />
      <label className="ml-2" htmlFor={props.fieldName}>
        {props.label}
      </label>
    </div>
  )
}
export default BaseCheckBox
