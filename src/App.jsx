import './App.css';
import React, { useEffect, useState } from 'react';
// importing react icon libary
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { FaFolder } from 'react-icons/fa';
//  importing axios for call api
import axios from 'axios';
import Errorpage from './components/404' 


// Main Component of are app
function App() {
 
// This state for using geting value.
  const [inputval, setinputval] = useState("");
// This state for showing response Data.
  const [response, setsesponse] = useState("");
// This state for showing error page when input is wrong.
  const [error, seterror] = useState(false)
// This state for
  const [callApi, setCallApi] = useState(false);

  // useEffect with dependency array
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${inputval ? inputval : "hasnainhsa"}`
      )
      .then((res) => {
        setsesponse(res.data);
        seterror(false);
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
      });
  }, [callApi]);



  const handlingform = (e) =>{
     e.preventDefault()
     console.log("input", inputval);

     if (!inputval) {
      alert("input field is empty");
      return;
    }

    setCallApi(!callApi);
  }
;
  return (
<React.Fragment>

{/* header - navbar */}
<main>
    <header>
    <h1 className='heading'><img  className='image' src="https://pngimg.com/uploads/github/github_PNG63.png" alt="" />
        Githup </h1>
        
    </header>
</main>

{/* search bar */}
<form onSubmit={handlingform} className="wrapper" >
    <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
    
    <input type="text" 
    className="search" 
    placeholder='Enter your profile name...'
    onChange={(e)=> setinputval(e.target.value)} 
    />
</form>    

{/* container for githup profile and showing api data  */}
  { error === false ? (
<div class="container">
  <div class="card-profile">
     <img src={response.avatar_url} alt="userpic" /> 
    <div class="info">
      <h3>Name: {response.name}</h3>
      <p>Bio: {response.bio}</p>
      <ol>
      <li>< BsPeopleFill/> <span> Follower : {response.followers} </span></li>
      <li><IoIosPeople/> <span> Following : {response.following} </span></li>
      <li><FaFolder/> <span> Repositories : {response.public_repos} </span></li>
      </ol>
    </div>
  </div>
 </div>
  ):(
    <Errorpage />
  )
}
    </React.Fragment>
  );
}

export default App;
