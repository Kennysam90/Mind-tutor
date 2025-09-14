import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const BlogGrid = () => {
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
          <h2 className="breadcrumb-title mb-2">Blog 2 Grid</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog 2 Grid</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* blog */}
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img className="img-fluid" src="assets/img/blog/blog-1.jpg" alt="img" />
              </a>
            </div>
            <div className="blog-item">
              <h5 className="mb-2"><a href="blog-details.html">Learn Web App Development from Experts in 2024</a></h5>
              <p className="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>
              <div className="blog-info">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex align-items-center user-profile">
                    <a href="instructor-details.html" className="user-img"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                    <a href="instructor-details.html" className="user-name">John Miller</a>
                  </div>
                  <ul className="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img className="me-1" src="assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img className="me-1" src="assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img className="img-fluid" src="assets/img/blog/blog-2.jpg" alt="img" />
              </a>
            </div>
            <div className="blog-item">
              <h5 className="mb-2"><a href="blog-details.html">Learn Web App Development from Experts in 2024</a></h5>
              <p className="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>
              <div className="blog-info">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex align-items-center user-profile">
                    <a href="instructor-details.html" className="user-img"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                    <a href="instructor-details.html" className="user-name">John Miller</a>
                  </div>
                  <ul className="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img className="me-1" src="assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img className="me-1" src="assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img className="img-fluid" src="assets/img/blog/blog-3.jpg" alt="img" />
              </a>
            </div>
            <div className="blog-item">
              <h5 className="mb-2"><a href="blog-details.html">Learn Web App Development from Experts in 2024</a></h5>
              <p className="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>
              <div className="blog-info">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex align-items-center user-profile">
                    <a href="instructor-details.html" className="user-img"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                    <a href="instructor-details.html" className="user-name">John Miller</a>
                  </div>
                  <ul className="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img className="me-1" src="assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img className="me-1" src="assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img className="img-fluid" src="assets/img/blog/blog-4.jpg" alt="img" />
              </a>
            </div>
            <div className="blog-item">
              <h5 className="mb-2"><a href="blog-details.html">Learn Web App Development from Experts in 2024</a></h5>
              <p className="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>
              <div className="blog-info">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex align-items-center user-profile">
                    <a href="instructor-details.html" className="user-img"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                    <a href="instructor-details.html" className="user-name">John Miller</a>
                  </div>
                  <ul className="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img className="me-1" src="assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img className="me-1" src="assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img className="img-fluid" src="assets/img/blog/blog-5.jpg" alt="img" />
              </a>
            </div>
            <div className="blog-item">
              <h5 className="mb-2"><a href="blog-details.html">Learn Web App Development from Experts in 2024</a></h5>
              <p className="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>
              <div className="blog-info">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex align-items-center user-profile">
                    <a href="instructor-details.html" className="user-img"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                    <a href="instructor-details.html" className="user-name">John Miller</a>
                  </div>
                  <ul className="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img className="me-1" src="assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img className="me-1" src="assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img className="img-fluid" src="assets/img/blog/blog-6.jpg" alt="img" />
              </a>
            </div>
            <div className="blog-item">
              <h5 className="mb-2"><a href="blog-details.html">Learn Web App Development from Experts in 2024</a></h5>
              <p className="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>
              <div className="blog-info">
                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                  <div className="d-flex align-items-center user-profile">
                    <a href="instructor-details.html" className="user-img"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                    <a href="instructor-details.html" className="user-name">John Miller</a>
                  </div>
                  <ul className="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img className="me-1" src="assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img className="me-1" src="assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>                 
      </div>
      {/* /pagination */}
      <div className="row align-items-center">
        <div className="col-md-12">
          <ul className="pagination justify-content-center">
            <li className="page-item prev">
              <a className="page-link" href="javascript:void(0)" tabIndex={-1}><i className="fas fa-angle-left" /></a>
            </li>
            <li className="page-item first-page active">
              <a className="page-link" href="javascript:void(0)">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">3</a>
            </li>
            <li className="page-item next">
              <a className="page-link" href="javascript:void(0)"><i className="fas fa-angle-right" /></a>
            </li>
          </ul>
        </div>
      </div>
      {/* /pagination */}
    </div>
  </div>
  {/* blog */}
  {/* Footer */}
  <Footer />
  {/* /Footer */}
</div>
{/* /Main Wrapper */}

    </>
  )
}

export default BlogGrid