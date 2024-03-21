
import React, { useState } from 'react'
import axios from 'axios';
import './google.css';
import ExcelTable from './ExcelTabel';
import bgimg from "../../../assets/bgimg.jpeg"
const Google = () => {
  const [formData, setFormData] = useState({
    client: '',
    target_keywords: '',
    budget: '',
    location: '',
    language: '',
    cta: '',
  });
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!formData.client || !formData.target_keywords || !formData.budget || !formData.location|| !formData.language || !formData.cta) {
      setErrorMessage('Please fill all the data.');
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(
        'https://uni-node-github.onrender.com/generate-google-revised-volume',
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
    <div className={`App ${isLoading && 'is-loading'}`} style={{ backgroundImage: `url(${bgimg})` , backgroundSize : 'cover' }} >
       {isLoading && <div className="loading-overlay"><div className='loading-overlay-child'></div></div>}


      <header>
        <div className="logo" style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
        <img src="/mainlogo.jpeg" style={{width : "100px" , height : "70px"}} alt="Logo" />
        </div>
        <h1>UNI Google Search Ad AI Helper</h1>

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

            <div className='N-box'>Client Name</div>
            </div>
            <input name="client"
              // placeholder="Client"
              value={formData.client} onChange={handleChange} />
          </div>

          <div className='d-flex'>
          <div className='supporter-div'>

            <div data-tooltip-Four="List the keywods you are targeting" className='mark'>?</div>
            <div className='N-box'>Target keywods</div>
            </div>
            <input
              name="target_keywords"
              // placeholder="Target Interests"
              value={formData.target_keywords}
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

            <div data-tooltip-Three="Enter the location where you are targeting your ad." className='mark'>?</div>

            <div className='N-box'>Location</div>
            </div>
            <input
             
              name="location"
              // placeholder="Budget"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex'>
          <div className='supporter-div'>

            <div data-tooltip-Three="Enter the language in which you want your Ad's to be." className='mark'>?</div>

            <div className='N-box'>Language</div>
            </div>
            <input
              
              name="language"
              // placeholder="Budget"
              value={formData.language}
              onChange={handleChange}
            />
          </div>
          <div className='d-flex'>
          <div className='supporter-div'>

            <div data-tooltip-Three="Enter your Call to Actions." className='mark'>?</div>

            <div className='N-box'>CTA</div>
            </div>
            <input
              name="cta"
              // placeholder="Budget"
              value={formData.cta}
              onChange={handleChange}
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
  );
}

export default Google