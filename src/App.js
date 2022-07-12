import { useCallback, useMemo, useState } from 'react';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}


function PhoneBookForm({ infoState, setInfoState, addEntryToPhoneBook }) {
  
  const onChangeHandler = (e) => {
    console.dir(infoState)
    setInfoState({...infoState, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={(e) => addEntryToPhoneBook() } style={style.form.container}>
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

function InformationTable({infoArray}) {

  const showTbody = useMemo(() => {
    return infoArray.length > 0 ? infoArray.map((v,i) => {
          return (
            <tr key={`tr-${i}`}>
              <td>{v.userFirstname}</td>
              <td>{v.userLastname}</td>
              <td>{v.userPhone}</td>
            </tr>
          )}
        ) : <></>
  }, [infoArray])

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
  const [infoArray, setInfoArray] = useState([]);
  
  const [infoState, setInfoState] = useState({
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  })

  const addEntryToPhoneBook = useCallback(() => {

    setInfoArray([...infoArray, {
      userFirstname: infoState.userFirstname,
      userLastname: infoState.userLastname,
      userPhone: infoState.userPhone
    }])
  },[infoArray])

console.dir(infoArray)
  return (
    <section>
      <PhoneBookForm 
        infoState={infoState} 
        setInfoState={setInfoState} 
        addEntryToPhoneBook={addEntryToPhoneBook}
      />
      <InformationTable infoArray={infoArray} />
    </section>
  );

}

export default App;
