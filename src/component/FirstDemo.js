import react, { useState } from "react";

const FirstDemo = () =>{
    
  const data = [
    {
      id: 1,
      name: "diksha",
      phone: "123245677",
      email: "chotidiksh@gmail.com",
      des: "nckdsjnkvjndskjvnjdsnvckd"
},

{
  id: 2,
  name: "diksha",
  phone: "123245677",
  email: "chotidiksh@gmail.com",
  des: "nckdsjnkvjndskjvnjdsnvckd"
},


{
  id: 3,
  name: "diksha",
  phone: "123245677",
  email: "chotidiksh@gmail.com",
  des: "nckdsjnkvjndskjvnjdsnvckd"
},


{
  id: 4,
  name: "diksha",
  phone: "123245677",
  email: "chotidiksh@gmail.com",
  des: "nckdsjnkvjndskjvnjdsnvckd"
},

{
  id: 5,
  name: "diksha",
  phone: "123245677",
  email: "chotidiksh@gmail.com",
  des: "nckdsjnkvjndskjvnjdsnvckd"
}

  ]
const [listdata, setlistdata] = useState(data)
    return (
        <>
      <div className="row">
        {listdata.map((item, index)=> {
return(
        
      <div className="col-lg-6 " key={index} id={index}>
        <div className="card" style={{background: "blue", margin:"25px", padding: "10px", color: "white"}}>
       <h5 className="title-sec">Id <span className="data-optn">{item.id}</span></h5>
       <h5 className="title-sec">Name <span className="data-optn">{item.name}</span></h5>
       <h5 className="title-sec">Phone <span className="data-optn">{item.phone}</span></h5>
       <h5 className="title-sec">Email <span className="data-optn">{item.email}</span></h5>
       <h5 className="title-sec">Description <span className="data-optn">{item.des}
       </span></h5>
       </div>
        </div>
       )
        })}
        
      </div>
       

  </>
    )
}
export default FirstDemo;