import React, { useState } from "react";

const Header= ()=>{

    const [Name, SetName] = useState({
        Name: "",
        Department : "",
        Rating: ""
    })
    const [Arr, SetArr] = useState([])
    const [username, setUsername] =useState(false)
    const [Back, setBack] =useState(false)

    
    const show=(event)=>{
        event.preventDefault()
        const tempobj = {
            Name: Name.Name,
            Department: Name.Department,
            Rating: Name.Rating
        }     
        // const Newarr = Arr 
        Arr.push(tempobj)
        SetName("")
        SetArr([...Arr])
        setUsername(true)

    }
    const goback = ()=>{
        setBack(true)
        setUsername(false)
    }
    
        return(
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                { 
                    username ?  
                <div>
                    <div className="box_2">
                         {
                            Arr.map((value,index)=>{
                                return(
                                    <div className="subdiv">Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</div>
                                )
                            })
                         }
                    </div>
                    <button className="btn_1" onClick={goback}>Go Back</button> 
                </div>  :
                <div className="box_1">
                    <label className="label">Name :</label>
                    <input className="text" type="text" name="Name" value={Name.Name} onChange={(event)=>SetName(event.target.value)}/>
                    <br/>
                    <label className="label">Department :</label>
                    <input className="text" type="text" name="Department" value={Name.Department} onChange={(event)=>SetName(event.target.value)}/>
                    <br/>
                    <label className="label">Rating :</label>
                    <input className="text" type="number" name="Rating" value={Name.Rating} onChange={(event)=>SetName(event.target.value)}/>
                    <br/>
                    <button className="btn" onClick={show}>Submit</button>
                </div> 
                }
               
               
            </div>
        )   








//     const [Name, SetName] = useState("")
//     const [Department, SetDepartment] = useState("")
//     const [Rating, SetRating] = useState("")
//     const [Arr, SetArr] = useState([])
//     const [username, setUsername] =useState(false)
//     const [Back, setBack] =useState(false)

    
//     const show=(event)=>{
//         event.preventDefault()
//         const tempobj = {Name, Department, Rating}
//         // const Newarr = Arr 
//         Arr.push(tempobj)
//         SetName("")
//         SetDepartment("")
//         SetRating("")
//         SetArr([...Arr])
//         setUsername(true)

//     }
//     const goback = ()=>{
//         setBack(true)
//         setUsername(false)
//     }
    
//         return(
//             <div>
//                 <h1>EMPLOYEE FEEDBACK FORM</h1>
//                 { 
//                     username ?  
//                 <div>
//                     <div className="box_2">
//                          {
//                             Arr.map((value,index)=>{
//                                 return(
//                                     <div className="subdiv">Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</div>
//                                 )
//                             })
//                          }
//                     </div>
//                     <button className="btn_1" onClick={goback}>Go Back</button> 
//                 </div>  :
//                 <div className="box_1">
//                     <label className="label">Name :</label>
//                     <input className="text" type="text" name="Name" value={Name} onChange={(event)=>SetName(event.target.value)}/>
//                     <br/>
//                     <label className="label">Department :</label>
//                     <input className="text" type="text" name="Department" value={Department} onChange={(event)=>SetDepartment(event.target.value)}/>
//                     <br/>
//                     <label className="label">Rating :</label>
//                     <input className="text" type="number" name="Rating" value={Rating} onChange={(event)=>SetRating(event.target.value)}/>
//                     <br/>
//                     <button className="btn" onClick={show}>Submit</button>
//                 </div> 
//                 }
               
               
//             </div>
//         )   
}

export default Header
