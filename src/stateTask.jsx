
import { useState } from 'react';
import './App.css';

function FormTask() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",  
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(event.target.name);
};

  
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log( formData);

  } 

// const test = (e) => {
//     e.preventDefault();
// console.log(e.target.value);
//  } 

  return (
    <div>
      <form>
        <input type="text" name="fName"  value={formData.fName} onChange={handleInputChange}/>
        <input type="text" name="lName" value={formData.lName} onChange={handleInputChange}/>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
        <input type="number" name="phone" onChange={handleInputChange}/>
        <button onClick={handleSubmit}>Submit</button>
        {/* <input type='text' name='test' value="test value" onClick={test}  /> */}
      </form>
    </div>
  )
}

export default FormTask