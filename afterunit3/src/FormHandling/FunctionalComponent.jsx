import React, { useState } from 'react';

function ControlledFunComp() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    review: '',
    hook: ''
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.firstname} ${formData.lastname} and your review is ${formData.review} and your selected state hook is ${formData.hook} `);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        First Name:
        <input type="text" className="border-2 border-solid border-black" name="firstname" value={formData.firstname} onChange={handleInputs}/>
        <br /><br />

        Last Name:
        <input type="text" className="border-2 border-solid border-black" name="lastname" value={formData.lastname} onChange={handleInputs}/>
        <br /><br />

        Write Review:
        <textarea className="border-2 border-solid border-black" name="review" value={formData.review} onChange={handleInputs}></textarea>
        <br />


        <h1>Select Box</h1>
        Choose State : <select name="hook" id="" value={formData.useState} onChange={handleInputs}>
          <option value="useState()">useState()</option>
          <option value="useEffect()">useEffect()</option>
          <option value="useContext()">useContext()</option>
          <option value="useRef()">useRef()</option>
        </select>
        <h2>Selected state Hooks : {formData.hook}</h2>
      
        <button>Submit Form</button> <br /><br />


      </form>
    </div>
  );
}
export default ControlledFunComp;
