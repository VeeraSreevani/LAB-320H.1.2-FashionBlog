


function Article({date,title,img,content}){
    
    return(
        <div>
            <h2>{date}</h2>
            <h2>{title}</h2>
            <img src={img} alt="news"/>
            <p>{content}</p>
            <div style={{display:"flex", justifyContent:"right"}} >
                <button style={{color:"red"}} type ="text"> continue's</button>
            </div>

        </div>
    )
} export default Article

// function Article(props)
// {
//     return(
//         <div>
//             <h1>{props.date} </h1>
//             <h1>{props.title}</h1>
//             <img src={props.img} alt="news" />
//             <p>{props.content}</p>

//         </div>
//     )
// } export default Article