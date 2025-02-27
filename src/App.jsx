//import Article1 from './components/Article1'

//import Article2 from './components/Article2'
//import learnerData from './data/learners'
//import Learner from './components/Learner'
//import ArticleData from './data/article'



import './App.css'
//import Article from './components/Article'
import image1 from './assets/blog-image-1.jpg'
import Article1 from './components/Article1'
import Article2 from './components/Article2'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const str= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illum et asperiores nemo ducimus error iste tempore labore itaque! Voluptatem natus ducimus temporibus odio at quae? Alias necessitatibus mollitia beatae?"

  return (
    <>
    <div>
      <Header/>
      <Nav/>
      <br /><br />
      <Article1/>
      <hr/>
      <Article2/>
      <br />
      <hr/>
      <br />
      <Footer/>



      {/* {
        ArticleData.map((item,index)=>(
          <article
            key={index}
            date = {item.date}
            title = {item.title}
            img = {item.img}
            content = {item.content}/>
        ))

      } */}
      {/* <article
        date = "11/12/20" 
        title = "On The Street in Brooklyn"
        img = {image1}
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa."
        />
         <article 
          
          date = "10/10/20"
          title="Vintage in Vogue"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa. Ab, nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, assumenda dicta! A neque alias voluptatem minima perspiciatis esse nihil cupiditate enim? Quam enim aspernatur possimus odio officia culpa."
          img={image2}
          />  */}
        
    </div>
      
    </>
  )
}

export default App


// ***********************************************************************
// {
//   learnerData.map((item,index)=>(
//     <Learner
//       key ={index}
//       name = {item.name}
//       age = {item.age}
//       lastLogin = { item.lastLogin}/>
//   ))
// }
//OR
{/* <Learner
        name = "Max"
        age = {30}
        lastLogin= "2/3/24"/>

      <Learner 
        name = {LearnerData[0].name}
        age = {LearnerData[0].age}
        lastLogin = { learnerData[0].lastLogin}
      />
*******************************************************************************

      <h1><strong>Sartre's List</strong></h1>
      <h2>Better-Dressed people</h2>
    
        <Nav/>
        <Article1/>
        <article
          title="First Blog"
          date = "11/11/20"
          content={str}
          img={image}
          />
           <article 
          title="second Blog"
          date = "10/10/20"
          content={str}
          img={image2}
          /> */}

