import './index.css'
function Input({name, placeholder, handleChange}){

  return (
    <input type="text"
           name={name}
           placeholder={placeholder}
           className='Input'
           onChange={handleChange}/>
  )
}
export default Input
