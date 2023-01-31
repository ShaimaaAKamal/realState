import React from 'react';
import styles from './homebanner.module.scss';

export default function HomeBanner() {
  return (
    <section className={styles.banner}>
        <div className='text-center'>
            <h1 className='text-white display-3 lh-sm fw-bold'>Search Your Next<br/>Home</h1>
            <p className='text-white fw-light'>Find new & featured property located in your local city. </p>
            <div className='bg-white rounded-2 mt-5 filter mx-auto px-4 py-2 py-md-0'>
                <div className="row gx-5">
                    <div className="col-xl-3 col-md-6">
                        <div className="mb-md-3 text-start py-2">
                            <label for="Location" className="form-label fs-sm text-muted">City/Street</label>
                            <input type="text" className="form-control" id="Location" placeholder="Location"/>
                          </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="mb-md-3 text-start py-2">
                            <label for="Property" className="form-label fs-sm text-muted">Property Type</label>
                            <input type="text" className="form-control" id="Property" placeholder="Property Type"/>
                          </div>
                    </div>
                     <div className="col-xl-3 col-md-6">
                        <div className="mb-md-3 text-start py-2">
                            <label for="Price" className="form-label fs-sm text-muted">Price Range</label>
                            <input type="text" className="form-control" id="Price" placeholder="Price"/>
                          </div>
                    </div>
                      <div className="col-xl-3 col-md-6 align-self-lg-center">
                        <div className=" mt-2 mt-md-4 mt-xl-2 justify-content-center d-flex  py-2 align-items-center">
                              <span className='h6 d-inline-block mt-2'>Advanced Filter</span>
                              <span className='bgSite py-2 px-4 rounded-2 ms-3 text-white'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </span>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
