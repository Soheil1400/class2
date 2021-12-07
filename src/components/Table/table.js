
import './table.css'
import { FaPen,FaTrash } from "react-icons/fa";
import Search from "../Search/search";
const Table = ({users, setUsers,nUser, setNUser,state,setState,setVisible}) => {
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    return (
        <div className={'table-container'}>
            <div className={'title'}>
                <div className={'title-style'}>
                    List of Student
                </div>
                <button onClick={()=>setVisible('flex')} className={'button-new new'}>
                    Add New Student
                </button>
            </div>
            <Search users={users} setUsers={setUsers}/>
            <table>
                <thead>
                <tr>
                    <td id={'idS'}>
                        Id
                    </td>
                    <td id={'fNameS'}>
                        First Name
                    </td>
                    <td id={'lNameS'}>
                        Last Name
                    </td >
                    <td id={'jobS'}>
                        Job
                    </td>
                    <td id={'buttonS'}>
                    </td>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td className={'job-style'}>{user.job}</td>
                        <td>
                            <button className={'button update'} onClick={()=>{setNUser(user) ; setState('Update') ;setVisible('flex')}}><FaPen /></button>
                            <button className={'button delete'} onClick={() => handleDelete(user.id)}><FaTrash /></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table