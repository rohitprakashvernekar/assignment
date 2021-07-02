import React from 'react';
import AddTask from './Addtask';
import { FaSms,FaUserPlus,FaArrowsAltV} from 'react-icons/fa';


const welcome=[
    {task:"My Name is task A"},
    {task:"My Name is task A"},
    {task:"My Name is task A"}
    
];
 const TryBoards=()=>{
     return (
         <div className="container">
             <div className="row text-left m-3">
                 <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6"><h3 className>Try Board 👋</h3></div>
                        <div className="col-lg-6 text-right m-auto"><FaSms/>  <FaUserPlus/> Share   <FaArrowsAltV/> Sort</div>
                    </div>
                 <AddTask/>
                 </div>
             </div>
             <div className="row m-3">

                 <div className="col-lg-12">
                    <h5 className="text-left">To Go Further</h5>
                     {
                         welcome.map((list,id)=>{
                             return(
                                 <div className="text-left p-3">
                                     <input type="radio" className="form=control"/>  {list.task}
                                 </div>
                             )
                             
                         })
                     }
                     
                 </div>
                 <div className="m-3">
                 <AddTask/>
                 </div>
             </div>
         </div>
     )
 }
 export default TryBoards;