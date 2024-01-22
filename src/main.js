import { useState, useEffect} from "react";
import React from "react";

const Main = () =>{
    
    let[heading, pickHeading] = useState("");
    let[content, pickContent] = useState("");
    let[num, pickPage] = useState(); 
    let[allInfo, updateInfo] = useState([]);
    let[prevData, setpreData] = useState({})
    


    const Submit = () =>{

        let userdata = {page:num, head:heading, info:content};
        updateInfo(allInfo = [...allInfo, userdata])
           
            pickHeading(""); 
            pickContent("");

    console.log(allInfo);
         
    }

    // const eraseContent =()=>{
    //     return(
    //         <div>
    //                 <fieldset className="border set2">
    //                     <h1 className="mt-2 text">{pickHeading('')}</h1>
    //                     <div className="m-3">
    //                         <p className="m-3">{pickContent('')}</p>
    //                     </div>
    //                 </fieldset>

    //             </div>
    //     )
    //   }

 const NextPage = ()=>{
        setpreData(allInfo);

        updateInfo("");
            
        const newPage = () =>{
            
                   num= num+1;
                   
            }
        

        updateInfo(newPage);

    }

    // const NextPage = ()=>{
    //     let currentPosition = 1;
    //    let maxPage = num;
    //      if(currentPosition<maxPage){
    //        currentPosition++;
    //        eraseContent();
    //    //   }if(currentPosition=maxPage)
    //    //     eraseContent();
    //    //     <button> Download </button>
    //    //     pickPage('');
    //      }
    //    }

      

     


//    const updateContent = () =>
       
//    {pickContent(allInfo[num].info)}
//    function handleInputChange (e) {
//    {
        
//             allInfo.map((cont, index) => {
//                 return (
//                     <div key={index}>
//                        <div>
//                             <fieldset className="border set">
//                                 <h1 className="m-5">{cont.head}</h1>
//                                 <div className="m-3 set1">
//                                     <p className="m-3">{cont.info}</p>
//                                 </div>
//                             </fieldset>

//                             </div>
//                     </div>

//                 )
//         }

//        )}
       
       




    const renderpages = ()=>{
        const pages = [];
        for(let i=1;i<=num; i++){
            pages.push(<div className="show mt-3 scrollmenu" key={i}>
            
                <div>
                    <fieldset className="border set2">
                        <h1 className="mt-2 text">page{i}</h1>
                        <div className="m-3">
                            <p className="m-3"></p>
                        </div>
                    </fieldset>

                </div>


            </div>);
        }
        return pages;
    }


  console.log(Submit);


    return(
        <div>
            <div className="container mt-4">
            <div className='row'>
                    <div className="col-lg-6 text-center">
                      <div className="container m-4">
                
                        <input className="form-control" type='number' placeholder="page numbers" value={num}
                            onChange={obj => (pickPage(obj.target.value))} /> <br />
                        <input className="form-control mt-2" type='text' placeholder="Heading"
                            value={heading}
                            onChange={obj => (pickHeading(obj.target.value))}
                        /><br />
                        <textarea rows="4" cols="40" type='text' className="form-control mt-2" placeholder="content"
                            value={content}
                            onChange={obj => (pickContent(obj.target.value))}
                        />
                        <div>
                                {renderpages()}
                        </div>

                        <div>
                            <button className="btn btn-success mt-4" onClick={Submit}>Submit</button>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-6 text-center">
                    <div className="container m-4">
                
                            {
                                allInfo.map((cont, index) => {
                                    return (
                                        <div key={index}>
                                           <div>
                                                <fieldset className="border set">
                                                    <h1 className="m-5">{cont.head}</h1>
                                                    <div className="m-3 set1">
                                                        <p className="m-3">{cont.info}</p>
                                                    </div>
                                                </fieldset>

                                                </div>
                                        </div>

                                    )
                                })
                            }
                            
                            <div>
                            <button className="btn btn-success mt-4" onClick={NextPage}>Next Page</button>
                           </div>

                        </div>
                    </div>
                    </div>
            </div>
          </div>

           
       
    )
}

export default Main;