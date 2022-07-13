import { useState } from 'react';
import { style } from './App.style';
import { usePhoneBookState } from './Context';

function PhoneBookForm() {

  const {addInfo} = usePhoneBookState();

  const [infoState, setInfoState] = useState({
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  })
  
  const onChangeHandler = (e) => {
    setInfoState({...infoState, [e.target.name]: e.target.value})
  }

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
        onChange={(e) => onChangeHandler(e)}
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
        onChange={(e) => onChangeHandler(e)}
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
        onChange={(e) => onChangeHandler(e)}
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

function InformationTable() {

  const {phonebook} = usePhoneBookState()

  const showTbody = phonebook.length > 0 ? phonebook.map((v,i) => {
    return (
      <tr key={`tr-${i}`}>
        <td>{v.userFirstname}</td>
        <td>{v.userLastname}</td>
        <td>{v.userPhone}</td>
      </tr>
    )}
  ) : <></>

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {showTbody}
      </tbody> 
    </table>
  );
}
function App() {

  return (
      <>
        <PhoneBookForm />
        <InformationTable />
      </>
  );

}

export default App;
