


function Learner(props){
    console.log(props);
    props.setCount(100)

    return(
        <div>
            <h2>Learner</h2>
            <h2>name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h4>Last Login: {props.lastLogin}</h4>


        </div>
    )

}export default Learner