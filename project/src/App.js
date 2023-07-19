import './App.css';
import data from "./data.json"
import { useState } from 'react';

const cont = document.getElementById("cont1");
let indx = document.getElementById("indx");
let name = document.getElementById("name");
let loc = document.getElementById("loc");
let grid = document.querySelector(".grid");

function App() {
  let [ind, setind] = useState(0)
  let indxnumber=ind;
  let totalnumber=ind;
  // console.log(data[0].location)
  function reset() {
    try{
      if (ind >= data.length - 1 || ind >= 0) {
        setind(0)
        let id=document.getElementById("rem")
        while(id.hasChildNodes()){
          cont.removeChild(id)
          if(id.hasChildNodes()){
            reset();
          }
        }
        // grid.classList.add("none")
        // cont.removeChild(grid)
      }
    }catch(err){console.log(err)}
  }
  
  function incre() {
    if (data.length == ind) {
      alert("No more people!")
      setind(data.length)
      totalnumber=0
      indxnumber=0
    }
    if (ind >= 0 && ind < data.length) {
      setind(++ind)
    }
    if (ind > data.length - 1) {
      setind(data.length - 1)
    }
    try{
    if(ind >= 0 && ind < data.length){

      // creating a grid div first n add css class
      let gridiv=document.createElement('div')
      gridiv.classList.add('grid')
      gridiv.setAttribute("id","rem")
      // creating inside div n addign css
      let indxdiv=document.createElement('div')
      indxdiv.classList.add('indx')
      let namediv=document.createElement('div')
      namediv.classList.add('name')
      let locdiv=document.createElement('div')
      locdiv.classList.add('loc')
      // creating h1 tags setting data to it
      let indxh1=document.createElement('h1')
      indxh1.innerHTML=++indxnumber+1
      let nameh1=document.createElement('h1')
      nameh1.innerHTML="Name : "+data[ind].name
      let loch1=document.createElement('h1')
      loch1.innerHTML="Location : "+data[ind].location
      // appending h1 tag to upper div ie div2
      indxdiv.append(indxh1)
      namediv.append(nameh1)
      locdiv.append(loch1)
      // div 2isappending to div 1 and to main div ie app
      gridiv.append(indxdiv)
      gridiv.append(namediv)
      gridiv.append(locdiv)
      cont.append(gridiv)
    }}
    catch(err){console.log("Error at element creation",err)}
  }
  return (
    <>
    <div className="App" id='cont1'>
        <button type='button' onClick={() => incre()}>NEXT PERSON</button>
        <h1>PEOPLE DATA</h1>
        <div class="grid" id='cont'>
          <div id="indx" class="indx"><h1 ><b>{1}</b></h1></div>
          <div id="name" class="name"><h1> Name : {data[0].name}</h1></div>
          <div id="loc" class="loc"><h1> Location :{data[0].location}</h1></div>
        </div>
        {/* <button type='button' onClick={() => reset()}>reset</button> */}
    </div>
        <p>CURRENTLY {++totalnumber} PEOPLE SHOWING</p>
    </>
  );
}

export default App;
