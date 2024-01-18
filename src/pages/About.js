import React from 'react'
import Image from 'next/image'
import lapy from "../assets/images/lapy.png";
const about = () => {
  return (
 <section>
    <div>
       <Image src={ lapy } 
       width={500}
       height={500}
       alt=''
       />
       <h2>About Me</h2>
    </div>
 </section>
  )
}

export default about