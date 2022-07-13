import { style } from "../App.style";
import { usePhoneBookState } from "../Context";

export default function InformationTable() {

    const {phonebook, deleteInfo} = usePhoneBookState()

    const onDeleteHandler = (e, userPhone) => {
        console.log(userPhone)
        e.preventDefault()
        deleteInfo(userPhone)
    }
  
    const showTbody = phonebook.length > 0 ? phonebook.map((v,i) => {
      return (
        <tr key={`tr-${i}`}>
          <td>{v.userFirstname}</td>
          <td>{v.userLastname}</td>
          <td>{v.userPhone}</td>
          <td><button onClick={(e) => onDeleteHandler(e, v.userPhone)}> delete </button></td>
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
            <th style={style.tableCell}> X </th>
          </tr>
        </thead>
        <tbody>
          {showTbody}
        </tbody> 
      </table>
    );
  }