'use client'
const TextInput = ({inputStyle, inputDivStyle, name, type, value, handleChange, ...others}) => {
  return (
    <div className={inputDivStyle}>
      <label htmlFor={name}/>
        <input
        type = {type}
        name = {name}
        value={value}
        onChange={handleChange}
        className={inputStyle}
        placeholder={name}
        {...others}
        />
    </div>
  )
}

export default TextInput