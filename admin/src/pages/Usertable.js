import { useHistory } from "react-router"

const Usertable=({bloodUser})=>{
    const history = useHistory()

    return(
            <tr className="table-row">
                <td>{bloodUser.u_id}</td>
                <td>{bloodUser.u_name}</td>
                <td>{bloodUser.u_email}</td>
                <td>{bloodUser.u_address}</td>
                <td>{bloodUser.u_gender}</td>
                <td>{bloodUser.u_mobileno}</td>
                <td>{bloodUser.reg_date}</td>
               
                
            </tr>
    )
}

export default Usertable