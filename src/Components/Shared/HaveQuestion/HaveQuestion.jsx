import React from 'react';
import styles from './haveQuestion.module.scss';

export default function HaveQuestion() {
  return (
    <section className='bgSite py-4'>
      <div className="container-lg px-2 px-lg-0">
        <div className="d-flex justify-content-lg-between flex-column flex-md-row align-items-center">
              <div className='text-white'>
                    <h6 className='h2'>
                       Do You Have Questions ?
                    </h6>
                    <p className='small mb-0'>We'll help you to grow your career and growth.</p>
              </div>
              <div className='mt-4 mt-md-0'>
                    <button className={styles.btn}>Contact Us Today</button>
              </div>
        </div>
      </div>
    </section>
  )
}
