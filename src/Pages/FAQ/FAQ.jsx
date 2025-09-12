import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const FAQ = () => {
  return (
    <>
       {/* Main Wrapper */}
<div className="main-wrapper">
  {/* Header Topbar*/}
  <Header />
  {/* /Header */}		
  {/* Breadcrumb */}
  <div className="breadcrumb-bar text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title mb-2">FAQ</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  <div className="content">
    <div className="container">
      <h2 className="main-title mb-1">Most frequently asked questions</h2>
      <p className="mb-4">Here are the most frequently asked questions you may check before getting started</p>
      <div className="row">
        <div className="col-lg-6">
          {/* Faq */}							
          <div className="faq-card">
            <h6 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqone" aria-expanded="false">Is there a 14-days trial?</a>
            </h6>
            <div id="faqone" className="collapse">
              <div className="faq-detail">
                <p>No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or contact our team for a personalized walkthrough of the features.</p>
              </div>
            </div>
          </div>
          <div className="faq-card">
            <h6 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqtwo" aria-expanded="false">How much time I will need to learn this app?</a>
            </h6>
            <div id="faqtwo" className="collapse">
              <div className="faq-detail">
                <p>No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or contact our team for a personalized walkthrough of the features.</p>
              </div>
            </div>
          </div>
          <div className="faq-card">
            <h6 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqthree" aria-expanded="false">Is there a month-to-month payment option?</a>
            </h6>
            <div id="faqthree" className="collapse">
              <div className="faq-detail">
                <p>No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or contact our team for a personalized walkthrough of the features.</p>
              </div>
            </div>
          </div>
          {/* /Faq */}
        </div>	
        <div className="col-lg-6">
          {/* Faq */}							
          <div className="faq-card">
            <h6 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqfour" aria-expanded="false">What’s the benefits of the Premium Membership?</a>
            </h6>
            <div id="faqfour" className="collapse">
              <div className="faq-detail">
                <p>No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or contact our team for a personalized walkthrough of the features.</p>
              </div>
            </div>
          </div>
          <div className="faq-card">
            <h6 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqfive" aria-expanded="false">Are there any free tutorials available?</a>
            </h6>
            <div id="faqfive" className="collapse">
              <div className="faq-detail">
                <p>No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or contact our team for a personalized walkthrough of the features.</p>
              </div>
            </div>
          </div>
          <div className="faq-card">
            <h6 className="faq-title">
              <a className="collapsed" data-bs-toggle="collapse" href="#faqsix" aria-expanded="false">How can I cancel my subscription plan?</a>
            </h6>
            <div id="faqsix" className="collapse">
              <div className="faq-detail">
                <p>No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or contact our team for a personalized walkthrough of the features.</p>
              </div>
            </div>
          </div>
          {/* /Faq */}
        </div>	
      </div>
      <div className="bg-light border rounded p-4 p-sm-5 mt-4">
        <div className="row">
          {/* Title and inputs */}
          <div className="col-lg-7 text-center mx-auto">
            {/* Avatar group */}
            {/* Title */}
            <h4 className="mb-2">Still have a question?</h4>
            <p className="mb-4">We'd be happy to help you with any questions you have! Please let us know what you're looking for, and we'll do our best to assist you.</p>
            {/* Button */}
            <a href="contact-us.html" className="btn btn-lg btn-dark mb-0">Contact us</a>
          </div>
        </div> {/* Row END */}
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default FAQ