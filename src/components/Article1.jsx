import image1 from '../assets/blog-image-1.jpg'



function Article1(){
    return(
        <div>
            <h1>11/12/20</h1>
            <h1>On The Street in Brooklyn</h1>
            <img src={image1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.</p>
            
            <div style={{display:"flex", justifyContent:"right"}} >
            {/* <FakeButton text="Continue'" onClick={handleClick} /> */}
            <button style={{color:"red"}} type ="text"> continue's</button>
            </div>
        </div>
    )
}
export default Article1