import React, { useState } from 'react'
import axios from 'axios';
import ExcelTable from './ExcelTable.jsx'
import bgimg from "../../../assets/bgimg.jpeg"


const Ugc = () => {
    const [formData, setFormData] = useState({
        brandDescription: '',
        uniqueSellingPoints: '',
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
        if (!formData.brandDescription || !formData.uniqueSellingPoints) {
          setErrorMessage('Please fill all the data.');
          return;
        }
        setIsLoading(true);
        try {
          const res = await axios.post(
            // 'https://uni-node-github.onrender.com/generate-ugc-script',
            'https://goldfish-app-lq8r3.ondigitalocean.app/generate-ugc-script',
    
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
      {/* {isLoading && <div className="loading-overlay">Loading...</div>} */}
      {isLoading && <div className="loading-overlay"><div className='loading-overlay-child'></div></div>}
        <header>
        <div className="logo" style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}>
          <img src="/mainlogo.jpeg" style={{width : "100px" , height : "70px"}} alt="Logo" />
        </div>
        <h1>UNI UGC Video Scriptor</h1>

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
          <div style={{ alignItems: 'start' }} className='d-flex'>
          <div className='supporter-div'>

            <div  data-tooltip-One="Briefly describe the brand you're promoting. Include key information about its mission, target audience, and the types of products or services it offers. Aim for clarity and conciseness to capture the essence of the brand." className='mark'>?</div>
            <div className='N-box'>Brand  Description</div>
            </div>
            <textarea
              name="brandDescription"
              // placeholder="Product Description"
              value={formData.brandDescription}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <div style={{ alignItems: 'start' }} className='d-flex'>
          <div className='supporter-div'>

            <div  data-tooltip-One="List the main advantages or unique selling points of the brand or product. Focus on what sets it apart from competitors, such as quality, innovation, price, customer service, or any specific features that appeal to your target audience." className='mark'>?</div>
            <div className='N-box'>Unique Selling Point (Advantage)</div>
            </div>
            <textarea
              name="uniqueSellingPoints"
              // placeholder="Product Description"
              value={formData.uniqueSellingPoints}
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

export default Ugc