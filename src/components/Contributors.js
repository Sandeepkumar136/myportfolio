import React from 'react'
import Loader from './Loader'


const Contributor=[{
  id:'1',
  name:'Rakesh Sharma',
  title:'Frontend Developer',
  img:'https://i.ibb.co/wKs6TVF/partner-1.jpg',
  description:'Frontend developers design and implement user interfaces, ensuring websites are responsive, visually appealing, and provide excellent user experiences.'
},
{
  id:'2',
  name:'Sumit Goshwami',
  title:'Backend Developer',
  img:'https://i.ibb.co/j8Yy3H2/partner-2.jpg',
  description:'Backend developers build and maintain server-side logic, databases, and APIs, ensuring smooth data flow and efficient functionality behind the scenes.'
},
{
  id:'4',
  name:'kiran gupta',
  img:'https://i.ibb.co/b7qwMBM/review-5.webp',
  description:'Backend developers manage server-side programming, databases, and API integrations, ensuring seamless communication between the client and server systems.'
},
{
  id:'3',
  name:'Ranjan mishra',
  title:'Data Analytis',
  img:'https://i.ibb.co/8Y5BXZw/partner-3.jpg',
  description:'Data analysts interpret data, identify trends, and provide insights to help organizations make informed decisions and improve performance.'
}]
const ContData=Contributor.sort((a,b)=>{a.id-b.id});
const Contributors = () => {
  return (
    <div>
      <Loader/>
      Contributors
    </div>
  )
}

export default Contributors;
