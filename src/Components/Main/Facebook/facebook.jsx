import React, { useState } from 'react'
import axios from 'axios';
import bgimg from "../../../assets/bgimg.jpeg"
import ExcelTable from './ExcelTable';
const Facebook = () => {
  const [formData, setFormData] = useState({
    client: '',
    target_interests: '',
    budget: '',
    objective: '',
    product_description: '',
  });
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleObjectiveChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, objective: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!formData.client || !formData.target_interests || !formData.budget || !formData.objective || !formData.product_description) {
      setErrorMessage('Please fill all the data.');
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(
        // 'https://uni-node-github.onrender.com/revised-fb-campaign-data',
        'https://goldfish-app-lq8r3.ondigitalocean.app/revised-fb-campaign-data',

        formData
      );
      setResponseData(res.data);
      setIsLoading(false);
      setErrorMessage(''); // Clear error message upon successful form submission
    } catch (error) {
      console.error('Error submitting form', error);
      setIsLoading(false);
      alert('Error submitting the form');
    }
  };
  return (
    <div className={`App ${isLoading && 'is-loading'}`} style={{ backgroundImage: `url(${bgimg})` , backgroundSize : 'cover' }}>
      {isLoading && <div className="loading-overlay"><div className='loading-overlay-child'></div></div>}
      <header>
        <div className="logo" style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
        <img src="/mainlogo.jpeg" style={{width : "100px" , height : "70px"}} alt="Logo" />
        </div>
        <h1>UNI Facebook Ad AI Planner</h1>
        <div style={{maxWidth : "700px" , width : "100%", margin : "auto" , paddingBottom : "20px" }}>

        <div style={{ marginTop: '25px' }}>
            By inputting these information, the Facebook Ad Planner will create a tailored campaign plan across three detailed tables: Campaign Details, Adset Audience, and Ads.
          </div>
          <div style={{ marginTop: '15px' }}>
            Get ready to elevate your digital marketing  game          </div>
        </div>

       
      </header>
      <main>
        <form onSubmit={handleSubmit} className="form">
          <div className='d-flex'>
            <div className='supporter-div'>

            <div data-tooltip-Five="Enter the name of the client you are creating this campaign for" className='mark'>?</div>

            <div className='N-box'>Brand Name</div>
            </div>
            <input name="client"
              // placeholder="Client"
              value={formData.client} onChange={handleChange} />
          </div>

          <div className='d-flex'>
          <div className='supporter-div'>

            <div data-tooltip-Four="List the interests of your target audience. Think about hobbies, behaviors, tv show, magazines or other pages they might like." className='mark'>?</div>
            <div className='N-box'>Target Interests</div>
            </div>
            <input
              name="target_interests"
              // placeholder="Target Interests"
              value={formData.target_interests}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex'>
          <div className='supporter-div'>

            <div data-tooltip-Three="Specify your total monthly budget for this campaign." className='mark'>?</div>

            <div className='N-box'>Monthly Budget</div>
            </div>
            <input
              type="number"
              name="budget"
              // placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
          {/* <select name="objective" onChange={handleObjectiveChange} value={formData.objective}>
            <option value="">Select Objective</option>
            <option value="Awareness">Awareness</option>
            <option value="Traffic">Traffic</option>
            <option value="Conversion">Conversion</option>
            <option value="Lead Generation">Lead Generation</option>
          </select> */}
          <div className='d-flex'>
          <div className='supporter-div'>

            <div data-tooltip-Two="Choose your campaigns primary goal." className='mark'>?</div>

            <div className='N-box'>Objective</div>
            </div>
            <div className="objective-options" onChange={handleObjectiveChange}>
              {/* <p>Select Objective</p> */}
              <label className="radio-option">
                <input
                  type="radio"
                  name="objective"
                  value="Awareness"
                  checked={formData.objective === "Awareness"}
                /> Awareness
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="objective"
                  value="Traffic"
                  checked={formData.objective === "Traffic"}
                /> Traffic
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="objective"
                  value="Conversion"
                  checked={formData.objective === "Conversion"}
                /> Conversion
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="objective"
                  value="Lead Generation"
                  checked={formData.objective === "Lead Generation"}
                  style={{ display: 'flex' }}
                /> <span>Lead&nbsp;Gen</span>
              </label>
            </div>
          </div>
          <div style={{ alignItems: 'start' }} className='d-flex'>
          <div className='supporter-div'>

            <div  data-tooltip-One="Provide a brief but compelling description of the product service being advertised.Focus on key benefits and what makes it unique" className='mark'>?</div>
            <div className='N-box'>Description</div>
            </div>
            <textarea
              name="product_description"
              // placeholder="Product Description"
              value={formData.product_description}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <button type="submit">Generate</button>

         
         
        </form>

        <div className="footer">
          <div style={{ marginTop: '15px', cursor: 'pointer', textAlign: 'center' ,display : "flex" , justifyContent : "center", alignItems : "center" , gap : "6px"}}>
            <div className='lines'>

            </div>
            {/* <a href='https://unimarketingagency.com/' style={{ color: 'white', textDecoration: 'none'  }} target='_blank'>
              <span style={{ borderBottom: '1px solid white', display: 'inline-block', paddingLeft: '5px' ,textDecoration: 'none' }}>unimarketingagency.com</span>
            </a> */}
            <a href='https://unimarketingagency.com/' style={{ color: 'white', textDecoration: 'none' }} target='_blank'>
  <span style={{ paddingLeft: '5px', textDecoration: 'none' }}>unimarketingagency.com</span>
</a>

            <div className='lines'></div>
          </div>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {responseData && <ExcelTable data={responseData.data} />}
      </main>
    </div>
  )
}

export default Facebook