import {useState,useEffect} from "react";
const FunctionTest = ()=>{
    const [state,setState] = useState({
        name: 'Ali',
        lastName: ''
    })
    const handleName = ()=>{
        setState({...state,name: 'Hasan'})
    }
    useEffect(()=>{
        console.log('hi')
    },[state])
    //you can use 2 useEffects
    return(
        <div>
            i am function component my name is {state.name}
            <button onClick={handleName}>change name</button>
        </div>
    )
}

export default FunctionTest