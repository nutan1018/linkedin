// import React from "react";
// import { useState, useEffect } from "react";

// const Show = () => {
//     let [allInfo, updateInfo] = useState([]);
//     const getInfo = () => {
//         let url = "http://localhost:1234/block";

//         fetch(url)
//             .then(response => response.json())
//             .then(productArray => {
//             updateInfo(productArray);
//             })
            
//         }

//         useEffect(()=>{
//             getInfo();
//         },[1]);


//     return (
//             <div className="m-4">
//                 {
//                     allInfo.map((cont,index)=>{
//                         return(
//                             <div key={index}>
//                                 <div>
//                                     <fieldset className="border set">
//                                     <h1 className="m-5">{cont.head}</h1>
//                                     <div className="m-3 set1">
//                                     <p className="m-3">{cont.info}</p>
//                                     </div>
//                                     </fieldset>
//                                 </div>

//                             </div>

//                         )
//                     })
//                 }

//             </div>
//         )
//     }

//     export default Show;