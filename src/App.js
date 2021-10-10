import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {

  const names = [
    {
      name: "Vicky",
      image:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      name: "mahendra",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      name: "vigneshwaran1",
      image:
        "https://i.pinimg.com/236x/ec/f0/a1/ecf0a1fff1ddf788883644722b57d82c.jpg"
    }
  ];

  return (
    <div className="App">
    {/* {names.map((nm)=>(<Msg image={nm.image} name={nm.name} />))} */}
    <Color />
    <Counter />
    
    </div>
  );
}
function Color(){
  const [color, setColor] = useState("");
const styles={
  backgroundColor:color,
  fontWeight:"bold",
  fontSize:"1.5rem"
};
const [colors,setColors] =useState([]);
// const [name, setName] = useState(["vicky","Soumi"])
return(
  <div>
    <input 
     value={color}
     style={styles}
     onChange={((event)=>setColor(event.target.value))}
     placeholder="enter a color" />
     <button onClick={()=>setColors([...colors,color])}>Add </button>
    {colors.map((clr)=>(<ColorBox colors={clr} />))}
    
  </div>
  
)
//new new
}
function ColorBox({colors}){
  const styles={
    backgroundColor:colors,
    height:"100px",
    width:"100px"
  }
  return(
    <div style={styles}></div>
  )
}
function Counter(){
  const [ like , SetLike] = useState(10);
  const [ disLike , DisLike] = useState(0);
  return(
    <div>
      <button onClick={()=>SetLike(like+1)}>Like{like}</button>
      {/* <p>{like}</p> */}
      <button onClick={()=>DisLike(disLike+1)}>DisLike{disLike}</button>
      {/* <p>{disLike}</p> */}
    </div>
  )
}

function Msg({image , name}){
  return(
    <div>
      <img height="100" src={image} alt={name} />
      <h1> Hi {name} </h1>
      </div>
  );
}
