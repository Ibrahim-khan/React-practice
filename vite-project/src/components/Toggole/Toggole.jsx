import React, {useState} from 'react'

const Toggole = () => {

    const [toggle, setToggle] = useState(true);

  return (
    
    <div style={{backgroundColor: "lightgray"}}>

        {toggle && (

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Accusamus quae, inventore saepe quod 
         voluptatum animi deserunt velit quis id minima 
         veritatis molestiae neque. Velit voluptas illum 
         tempore molestias. Ipsum id ea cumque consectetur 
         aperiam aspernatur odit asperiores accusamus 
         facere doloribus nostrum veniam, cum expedita, 
         cupiditate esse. Labore laboriosam autem inventore?
      </p>
      )}
        <button style={{margin:'10px'}} onClick={()=>{setToggle (!toggle)}}> {toggle ? "Hide" : "Show"} </button>
    
    </div>
  )
}

export default Toggole
