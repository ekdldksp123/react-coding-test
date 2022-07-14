import { useMemo } from "react";
import { style } from "../App.style";
import { usePhoneBookState } from "../hook/Context";

export default function InformationTable() {

    const {phonebook, deleteInfo} = usePhoneBookState()

    const showTbody = useMemo(() => phonebook.length > 0 ? phonebook.map((v,i) => {
      return (
        <tr key={`tr-${i}`}>
          <td>{v.userFirstname}</td>
          <td>{v.userLastname}</td>
          <td>{v.userPhone}</td>
          <td><button style={style.button} onClick={(e) => onDeleteHandler(e, v.userPhone)}> delete </button></td>
          <td><button style={style.button} onClick={(e) => {}}> edit </button></td>
        </tr>
      )}
    ) : <></>
  ,[phonebook])

    const onDeleteHandler = (e, userPhone) => {
        console.log(userPhone)
        e.preventDefault()
        deleteInfo(userPhone)
    }
  
    return (
      <table style={style.table} className='informationTable'>
        <thead> 
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
            <th style={style.tableCell}> 🗑️ </th>
            <th style={style.tableCell}> 🔨 </th>
          </tr>
        </thead>
        <tbody>
          {showTbody}
        </tbody> 
      </table>
    );
  }