import React from 'react';
import styles from './footer.module.scss';
import logo from '../../../assets/images/logo-light.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const companyLinks=[{title:'Home',url:''},{title:'About',url:'/about'},{title:'Blog',url:'/blog'}];
    const usefulLinks=[{title:'Services',url:'/services'},{title:'Pricing',url:'/pricing'},{title:'Contact',url:'/contact'}]

  return (
    <section className={styles.bgDark}>
      <div className="container-lg py-5 px-4 px-lg-0">
        <div className='row gx-0'>
          <div className="col-lg-4 col-md-6">
              <div className='d-flex align-items-center align-items-lg-start flex-column px-4'>
                    <img src={logo} alt="logo image"  className={styles.logoWitdh}/>
                      <div className='text-muted fs-sm mt-4 text-center text-lg-start'>
                          <p>2593 Timbercrest Road, Chisana, Alaska Badalas <br/>United State</p>
                          <p>(+91)7-723-46089867</p>
                          <p className="text-decoration-underline">demo@demo.com</p>
                  </div>
              </div>
          </div>
          <div className="col-lg-2 col-md-6">
                      <div className='text-center mt-3 text-lg-start'>
                        <h5 className='text-white'>Company</h5>
                        <div className='d-flex flex-column mt-4'>
                          {
                              companyLinks.map((companyLink,index) => <Link key={index} to={companyLink.url} className='text-decoration-none text-muted mb-2'>{companyLink.title} </Link>)
                          }
                        </div>
                      </div>
          </div>
          <div className="col-lg-2 col-md-6">
                      <div className='text-center mt-3 text-lg-start'>
                        <h5 className='text-white'>Useful Links</h5>
                        <div className='d-flex flex-column mt-4'>
                               {
                              usefulLinks.map((usefulLink,index) => <Link key={index} to={usefulLink.url} className='text-decoration-none text-muted mb-2'>{usefulLink.title} </Link>)
                          }
                        </div>
                      </div>
            
          </div>
          <div className="col-lg-4 col-md-6">
                  <div className='text-center text-lg-start mt-4 mt-lg-0'>
                     <h5 className='text-white my-3'>Do You Need Help With Anything?</h5>
                      <p className='text-muted text-center text-lg-start small'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                      <div className="input-group input-group-lg  mb-3">
                            <input type="email" className="form-control styles.input" placeholder="Email Address" aria-label="EmailAddress" aria-describedby="EmailAddress"/>
                            <span className="input-group-text bgSite text-white border-0 fs-sm fw-light" id="EmailAddress">Subscribe</span>
                      </div>
                  </div>
          </div>
        </div>
      </div>
      <div className='py-4 border-top border-secondary text-muted text-center'>
          <span>© 2021 RentUP. Designd By GorkCoder.</span>
        </div>
    </section>
  )
}
