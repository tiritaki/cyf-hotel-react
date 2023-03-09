import React, {useState} from "react";
import moment from 'moment';
import CustomerProfile from "./CustomerProfile";

function SearchRow (props){
    const [colour, setColour] = useState("originalColor")

    function NewColor () { 
        setColour(colour ? "" : 'newTrColor')
    }
    return (
      <>
        <tr className = {colour} onClick = {NewColor}>
          <td scope="row">{props.guest.id}</td>
          <td>{props.guest.title}</td>
          <td>{props.guest.firstName}</td>
          <td>{props.guest.surname}</td>
          <td>{props.guest.email}</td>
          <td>{props.guest.roomId}</td>
          <td>{props.guest.checkInDate}</td>
          <td>{props.guest.checkOutDate}</td>
          <td>{moment(props.guest.checkOutDate).diff(moment(props.guest.checkInDate), 'days')}</td>
          <button class ='button-pointer'>Show Profile</button>
        </tr>
      </>
      )
}

export default SearchRow