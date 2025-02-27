//* eslint-disable react/prop-types */

// function Article2(props){
//     console.log(props)
//     return(
//     <article>
//         <h2>Article</h2>
//         <h2>{props.title}</h2>
//         <h2>{props.date}</h2>
//         <p>{props.content}</p>
//         <img src={props.img}/>
//     </article>
//     )
// }
// export default Article2;

import image2 from '../assets/blog-image-2.jpg'

function Article2(){
   
    return(
        <div>
            <h1>10/12/20</h1>
            <h1>Vintage in Vogue</h1>
            <img src={image2} alt="" />
            <p style={{textWrap:"wrap"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.</p>
            
            <div style={{display:"flex", justifyContent:"right"}} >
                   {/* <FakeButton text="Continue'" onClick={handleClick} /> */}
                <button style={{color:"red"}} type ="text"> continue's</button>
                Continues
            </div>     
        </div>
    )
}
export default Article2;