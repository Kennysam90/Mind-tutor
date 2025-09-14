import React from 'react'

const Security = () => {
  return (
    <>
        <div className="card mb-0">
            <div className="card-body">
              <div className="border-bottom mb-4 pb-4">
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <h5 className="mb-1 fs-18">Change Password</h5>
                      <p>Can't remember your current password?&nbsp;<a href="#" className="text-decoration-underline">Reset your password via email</a></p>
                    </div>
                    <form action="https://dreamslms.dreamstechnologies.com/html/template/student-change-password.html">
                      <div className="mb-3 position-relative">
                        <label className="form-label">Current Password <span className="text-danger"> *</span></label>
                        <div className="position-relative">
                          <input type="password" className="pass-input form-control" />
                          <span className="isax toggle-password isax-eye-slash text-gray-7 fs-14" />
                        </div>
                      </div>
                      <div className="mb-3 position-relative">
                        <label className="form-label">New Password <span className="text-danger"> *</span></label>
                        <div className="position-relative" id="passwordInput">
                          <input type="password" className="pass-inputs form-control" />
                          <span className="isax toggle-passwords isax-eye-slash text-gray-7 fs-14" />
                        </div>
                        <div className="password-strength" id="passwordStrength">
                          <span id="poor" />
                          <span id="weak" />
                          <span id="strong" />
                          <span id="heavy" />
                        </div>
                        <div className="mt-2 fs-14" id="passwordInfo">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>	
                      </div>
                      <div className="mb-3 position-relative">
                        <label className="form-label">Confirm Password <span className="text-danger"> *</span></label>
                        <div className="position-relative">
                          <input type="password" className="pass-inputa form-control" />
                          <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-secondary" type="submit">Change Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h5 className="mb-1 fs-18">Change Email</h5>
                    <p>Your current email address is&nbsp;<a href="#" className="fw-semibold"><span className="__cf_email__" data-cfemail="fd8f949e959c8f99bd98859c908d9198d39e9290">[email&nbsp;protected]</span></a></p>
                  </div>
                  <form action="https://dreamslms.dreamstechnologies.com/html/template/instructor-change-password.html">
                    <div className="mb-3">
                      <label className="form-label">New Email Address <span className="text-danger"> *</span></label>
                      <input type="text" className="form-control" />
                    </div>
                    <div>
                      <button className="btn btn-secondary" type="submit">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Security