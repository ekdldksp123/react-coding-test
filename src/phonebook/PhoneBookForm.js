import { useCallback, useState } from "react";
import { style } from "../App.style";
import { usePhoneBookState } from "../hook/Context";

export default function PhoneBookForm() {

    const {addInfo} = usePhoneBookState();
  
    const [infoState, setInfoState] = useState({
      userFirstname: 'Coder',
      userLastname: 'Byte',
      userPhone: '8885559999'
    })
    
    const OnChangeHandler = useCallback((e) => {
        setInfoState({...infoState, [e.target.name]: e.target.value})
    }, [infoState])
  
    const onSubmitHandler = (e) => {
      e.preventDefault() //(*) submit 시에 페이지 리로딩을 막아주고 데이터가 유지됨!!!
      addInfo({...infoState})
    }
  
    return (
      <form onSubmit={(e) => onSubmitHandler(e)} style={style.form.container}>
        <label>First name:</label>
        <br />
        <input 
          style={style.form.inputs}
          className='userFirstname'
          name='userFirstname' 
          type='text'
          value={infoState.userFirstname}
          onChange={(e) => OnChangeHandler(e)}
        />
        <br/>
        <label>Last name:</label>
        <br />
        <input 
          style={style.form.inputs}
          className='userLastname'
          name='userLastname' 
          type='text' 
          value={infoState.userLastname}
          onChange={(e) => OnChangeHandler(e)}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className='userPhone' 
          name='userPhone' 
          type='text'
          value={infoState.userPhone}
          onChange={(e) => OnChangeHandler(e)}
        />
        <br/>
        <input 
          style={style.form.submitBtn} 
          className='submitButton'
          type='submit' 
          value='Add User' 
        />
      </form>
    )
}