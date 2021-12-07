import './form.css'
import {BsX} from "react-icons/bs";

const Form = ({users, setUsers, nUser, setNUser, state, setState, setVisible}) => {
    const handleVisit = () => {
        setVisible('none')
        setNUser({id: '', firstName: '', lastName: '', job: ''})
        setState('Create')
    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (state === 'Update') {
            setUsers(users.map(oldUser => nUser.id === oldUser.id ? nUser : oldUser))
        } else {
            setUsers([...users, nUser])
        }
        //**unControl**
        // const data = new FormData(e.target)
        // console.log(data.get('firstName'))
        // const [id,firstName,lastName,job] = [data.get('id'),data.get('firstName'),data.get('lastName'),data.get('job')]
        // setUsers([...users,{id,firstName,lastName,job}])
        // e.target.reset()
        //**Control**
        handleVisit()
    }
    const handleChange = (e) => {
        setNUser({...nUser, [e.target.name]: e.target.value})
    }
    return (
        <form className={'form-container'} onSubmit={handleAdd}>
            <div className={'close'} onClick={() => handleVisit()}>
                <BsX/>
            </div>
            <div className={'form-input'}>
                <label htmlFor={'id'}>Id</label>
                <input onChange={handleChange} id={'id'} type={"text"} name={'id'} value={nUser.id}/>
            </div>
            <div className={'form-input'}>
                <label htmlFor={'firstName'}>First Name</label>
                <input onChange={handleChange} id={'firstName'} type={"text"} name={'firstName'}
                       value={nUser.firstName}/>
            </div>
            <div className={'form-input'}>
                <label htmlFor={'lastName'}>Last Name</label>
                <input onChange={handleChange} id={'lastName'} type={"text"} name={'lastName'} value={nUser.lastName}/>
            </div>
            <div className={'form-input'}>
                <label htmlFor={'job'}>Job</label>
                <input onChange={handleChange} id={'job'} type={"text"} name={'job'} value={nUser.job}/>
            </div>
            <div className={'form-input'}>
                <input type={'submit'} value={state}/>
            </div>
        </form>
    )
}

export default Form