import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className='hero is-primary is-bold is-large position-section'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section is-centered'>
                <h1 className='title'>
                                    404: Não encontrado
                </h1>
                <h2 className='subtitle'>
                                    Essa página não existe!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
