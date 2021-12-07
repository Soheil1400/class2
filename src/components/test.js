import {Component} from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        console.log('constructor is running')
        this.state = {
            name: props.name
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps is running')
        return {
            // name: 'mr ' + props.name
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate is running')
        //telegram +99
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate is running')
        //undo or server error
        return true
    }

    componentDidMount() {
        console.log('componentDidMount is running')
        // setTimeout(()=>{this.setState({name: 'hamid'})},2000)
        // this.setState({name: 'hamid'})
        // console.log(this.state.name)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate is running')
        //component is updated
    }

    componentWillUnmount() {
        console.log('componentWillUnmount is running')
        //you should not call setState
    }

    render() {
        console.log('render is running')
        return (
            <div>
                my original name is : {this.props.name}
                <br/>
                hello i am {this.state.name} component
                <button onClick={() => this.setState({name: 'zahara'})}>change my name</button>
            </div>
        )
    }
}


export default Test