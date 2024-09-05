import React from 'react'
import Loader from './Loader';
import HomeTyping from './HomeTyping';

const HS_Arr=[{
  id:"1",
  title:"Convert CSV to VCF",
  description:"Converting CSV to VCF using Python allows you to transfer contact information from spreadsheets to vCard files, which are widely used for importing contacts into phones and email clients. By utilizing libraries like `csv` and `vobject`, you can automate the conversion process, ensuring efficient and accurate data migration."
},
{
  id:"2",
  title:"Using InstaBot in PY",
  description:"Instabot is a Python library designed for automating Instagram activities, such as liking posts, following users, and commenting. It offers simple tools for building bots that interact with Instagram’s API. With easy installation and customizable options, it helps streamline engagement tasks efficiently."
},
{
  id:"3",
  title:"Open of Terminal",
  description:"Opening the terminal gives access to a text-based interface for interacting with your operating system. It allows users to execute commands, navigate files, run scripts, and manage system tasks. Essential for developers, system administrators, and power users, it provides control over software installation, file manipulation, and debugging processes efficiently."
},
{
  id:"4",
  title:"Email Validation in JavaScript",
  description:"Creating an email validator in JavaScript involves using regular expressions to check the format of an email string. The function compares the input against a pattern to ensure it contains a valid structure, including an symbol and domain. It’s useful for form validation and ensuring correct user input."
}]

const Home = () => {
  return (
    <div>
      <Loader/>
      <HomeTyping/>
      <h2 className="home-heading">
        updated informations
      </h2>
      <div className="h-card-container">
        {
          HS_Arr.map((item)=>(
            <div key={item.id} className="h-card-contain">
              <div className="h-title">
                {item.title}
              </div>
              <div className="h-descrip">
                {item.description}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;