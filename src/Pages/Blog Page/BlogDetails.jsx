import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

const BlogDetails = () => {
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
          <h2 className="breadcrumb-title mb-2">Blog Details</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* blog */}
  <div className="blog-sec blog-details">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <img className="img-fluid rounded-2" src="assets/img/blog/blog-detail-image.jpg" alt="img" />
          <div className="blog-info my-3">
            <ul className="d-flex align-items-center flex-wrap gap-2">
              <li>
                <div className="avatar avatar-sm rounded-pill me-2 flex-shrink-0">
                  <span>
                    <a href="instructor-details.html"><img className="rounded-pill w-auto" src="assets/img/user/user-52.jpg" alt="img" /></a>
                  </span>
                </div>
                <p><a href="instructor-details.html">John Miller</a></p>
              </li>
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
          <h5 className="mb-3">Learn Web App Development from Experts in 2024</h5>
          <p>Web app development continues to be one of the most sought-after skills in the tech industry, and 2024 is the perfect year to start your journey. With businesses across the globe increasingly relying on web applications for their operations, the demand for skilled developers is at an all-time high. From lucrative job opportunities to the chance to work on cutting-edge technologies, learning web app development opens doors to a wide array of possibilities. Emerging trends like Progressive Web Apps (PWAs), serverless architectures, and AI integration are transforming the field, making it an exciting time to dive in.</p>
          <div className="p-3 my-4 bg-light-900 blog-blockquote">
            <p className="text-gray-9">To succeed in web app development, it’s crucial to master a range of skills. On the frontend, knowledge of HTML5, CSS3, and JavaScript is foundational, along with frameworks like React or Vue.js. For backend development, expertise in Node.js, Python (Django or Flask), or PHP is essential. Familiarity with databases, including SQL and NoSQL options like MongoDB and PostgreSQL, is equally important. Tools like Git for version control and Jest or Selenium for testing round out the technical skill set. </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <img className="img-fluid rounded-2" src="assets/img/blog/blog-29.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <img className="img-fluid rounded-2" src="assets/img/blog/blog-30.jpg" alt="img" />
              </div>
            </div>
          </div>
          <p>One of the key advantages of starting in 2024 is the availability of advanced tools, frameworks, and learning resources. Frameworks like React, Angular, and Vue.js have matured, making development more efficient and user-friendly. Additionally, the rise of online platforms and boot camps provides access to high-quality training, whether you're a beginner or an experienced programmer. The developer community is also thriving, with frequent conferences, virtual meetups, and forums that offer networking and collaborative opportunities.</p>
          <p>If you’re ready to embark on this exciting journey, now is the time to invest in your future. With expert mentorship, practical experience, and a commitment to continuous learning, you can unlock a world of opportunities in web app development in 2024 and beyond.</p>
          <div className="p-3 text-center text-md-start p-lg-4 my-4 bg-light-900 rounded-2 d-md-flex align-items-center">
            <div className="avatar flex-shrink-0 blog-avatar">
              <a href="instructor-details.html"><img className="img-fluid rounded-pill" src="assets/img/user/user-52.jpg" alt="img" /></a>
            </div>
            <div className="ps-md-3 mt-2 mt-md-0">
              <span className="text-secondary mb-1">Author</span>
              <h5 className="mb-1 fs-18"><a href="instructor-details.html">Robert Hollenbeck</a></h5>
              <p>I am experienced project manager and consultant with a rich background in digital project execution and freelance talent acquisition. With over 10 years in the industry, I have mastered the art of identifying and collaborating with top-tier freelance talent across various fields including technology, marketing, and creative services.</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="previous-post d-flex flex-column">
              <a href="#" className="fs-14 fw-medium mb-1"><i className="isax isax-arrow-left me-1" /> Previous Post</a>
              <span className="fs-14 d-none d-md-flex">Transform Education with the Power of an LMS</span>
            </div>	
            <div className="next-post d-flex flex-column text-end">
              <a href="#" className="fs-14 fw-medium mb-1">Previous Post<i className="isax isax-arrow-right-1 ms-1" /></a>
              <span className="fs-14 d-none d-md-flex">Revolutionize Learning with a Modern LMS</span>
            </div>						
          </div>
          <div className="blog-widget">
            <h5 className="fs-18 mb-3">Latest Tags</h5>
            <div className="latest-tags">
              <ul className="tags d-flex flex-wrap">
                <li><a href="javascript:void(0);" className="tag rounded-1 p-2 fs-10 fw-medium d-flex">HTML</a></li>
                <li><a href="javascript:void(0);" className="tag rounded-1 p-2 fs-10 fw-medium d-flex">Web Design</a></li>
                <li><a href="javascript:void(0);" className="tag rounded-1 p-2 fs-10 fw-medium d-flex">Programming</a></li>
              </ul>
            </div>
          </div>
          <div className="blog-reviews mb-3">
            <h5 className="mb-3 fs-18">Reviews</h5>
            <div className="review-item shadow-none mb-3">
              <div className="review-info">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-lg me-2 flex-shrink-0">
                      <a href="student-details.html"><img src="assets/img/user/user-05.jpg" className="rounded-circle" alt="img" /></a>
                    </span>
                    <div>
                      <h5 className="fs-16 fw-medium"><a href="student-details.html">Adrian Hendriques</a></h5>
                      <div className="d-flex align-items-center flex-wrap date-info">
                        <span className="mb-0 fs-14">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5"><i className="isax isax-repeat me-1" />Reply</a>
                </div>
                <p className="mb-2 mt-1">I highly recommend to anyone looking to learn . Their passion for the subject and dedication to students make them an outstanding instructor. I would definitely take another course with them in the future.</p>
                <div className="d-inline-flex align-items-center">
                  <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-like-15 me-1" />21</a>
                  <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-dislike5 me-1" />50</a>
                  <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-heart5 text-danger me-1" />45</a>
                </div>
              </div>
            </div>
            <div className="review-item shadow-none mb-0">
              <div className="review-info">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-lg me-2 flex-shrink-0">
                      <a href="student-details.html"><img src="assets/img/user/user-26.jpg" className="rounded-circle" alt="img" /></a>
                    </span>
                    <div>
                      <h5 className="fs-16 fw-medium"><a href="student-details.html">Adrian Hendriques</a></h5>
                      <div className="d-flex align-items-center flex-wrap date-info">
                        <span className="mb-0 fs-14">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="btn btn-md d-inline-flex align-items-center mb-2 text-gray-5"><i className="isax isax-repeat me-1" />Reply</a>	
                </div>
                <p className="mb-2 mt-1">While I learned a lot from this course, I feel like I could have used more practical examples or exercises that apply the theory. The course focused a lot on lecture-based content and could have incorporated more real-world scenarios.</p>
                <div className="d-inline-flex align-items-center">
                  <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-like-15 me-1" />21</a>
                  <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-dislike5 me-1" />50</a>
                  <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-heart5 text-danger me-1" />45</a>
                </div>
                <div className="review-info border-0 bg-light-900 reply mt-4 p-3 rounded-2">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="d-flex align-items-center mb-2">
                      <span className="avatar avatar-lg me-2 flex-shrink-0">
                        <a href="instructor-details.html"><img src="assets/img/user/user-25.jpg" className="rounded-circle" alt="img" /></a>
                      </span>
                      <div>
                        <h6 className="fs-16 fw-medium"><a href="instructor-details.html">Rolands Granger</a></h6>
                        <div className="d-flex align-items-center flex-wrap date-info">
                          <span className="mb-0 fs-14">2 days ago</span>
                        </div>
                      </div>
                    </div>
                    <a href="javascript:void(0);" className="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5"><i className="isax isax-repeat me-1" />Reply</a>
                  </div>
                  <p className="mb-2">Thanks! Best luck for Future</p>
                  <div className="d-inline-flex align-items-center">
                    <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-like-15 me-1" />21</a>
                    <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-dislike5 me-1" />50</a>
                    <a href="javascript:void(0);" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14"><i className="isax isax-heart5 text-danger me-1" />45</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment">
            <h5 className="fs-18 mb-3">Leave a Comment</h5>
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">Comment</label>
                    <textarea className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" />Save my name &amp; email in this browser for the next time I comment
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-secondary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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

export default BlogDetails