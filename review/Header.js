import React, {useState} from 'react';
import Home from "./Home";
const Header = () => {
const [searchTerm,setSearchTerm] = useState('');
 const inputEvent =(event) =>{
   const data = event.target.value;
   console.log(data);
   setSearchTerm(data);
 }
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-warning bg-warning">

    <a className="navbar-brand me-5" href="#">
      <img src='images/t.png'  style={{ maxWidth: '120px' }}/>
    </a>

      
        <div className='bi bi-search bg-white p-2  rounded rounded-5'>
        <input className="me-2"  type="text" id="search-item" placeholder="Search" value={searchTerm}
         onChange={inputEvent} style ={{maxWidth:'100%',border:'none',outline:'none',fontSize:'16px'}}/>
         
        </div>
      

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">

        <li className="nav-item dropdown ms-5" >
          <a className="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subject
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item">Body Joints - Elbow</a></li>
            <li><a className="dropdown-item">Body Joints - Ball-Socket Joint</a></li>
            <li><a className="dropdown-item">Chemical Change - Heating Sugar</a></li>
            <li><a className="dropdown-item">Acids-Bases - Conductivity</a></li>

          </ul>
        </li>
      </ul>
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='bi bi-globe'></span> Language
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">English</a></li>
            <li><a className="dropdown-item" href="#">हिंदी</a></li>

          </ul>
        </li>
      </ul>

    </div>
 
</nav>
    </div>
  )
}

export default Header;









// import React, {useState} from 'react';

// const Header = () => {
// const [select,setSelect] = useState();
//   const dropdownItem = (e) =>{
//     alert(e.target.value);
//   }
//   return (
//     <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg navbar-warning bg-warning">

//     <a className="navbar-brand me-5" href="#">
//       <img src='images/t.png'  style={{ maxWidth: '120px' }}/>
//     </a>

//     <form className="d-flex bg-white rounded rounded-5">
//         <i className='bi bi-search bg-white p-2 rounded rounded-5'></i>
//         <input className="me-2"  type="text" id="search-item" placeholder="Search" style ={{maxWidth:'100%',border:'none',outline:'none',fontSize:'16px'}}/>
            
//       </form>

//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>


//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav m-auto mb-2 mb-lg-0">

//         <li className="nav-item dropdown ms-5" >
//           <a className="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Subject
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown"  onChange={dropdownItem} >
//             <li><a className="dropdown-item" value={select}>Body Joints - Elbow</a></li>
//             <li><a className="dropdown-item" value={select}>Body Joints - Ball-Socket Joint</a></li>
//             <li><a className="dropdown-item" value={select} >Chemical Change - Heating Sugar</a></li>
//             <li><a className="dropdown-item" value={select} >Acids-Bases - Conductivity</a></li>

//           </ul>
//         </li>
//       </ul>
//       <ul className="navbar-nav me-auto  mb-2 mb-lg-0">

//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             <span className='bi bi-globe'></span> Language
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">English</a></li>
//             <li><a className="dropdown-item" href="#">हिंदी</a></li>

//           </ul>
//         </li>
//       </ul>

//     </div>
 
// </nav>
//     </div>
//   )
// }

// export default Header


