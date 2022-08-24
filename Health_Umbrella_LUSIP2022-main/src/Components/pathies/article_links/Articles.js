import React from 'react'
import face from '../logo_card/facebook.png'
import insta from '../logo_card/instagram.png'
import LogoCard from '../logo_card/LogoCard'
import twit from '../logo_card/twitter.png'
import logo from './logo.png'
import './backgroundStyles.css'
import './articlesStyles.css'
import { ArticleCard } from '../article_card/ArticleCard'

const Articles = () => {
  return (
    <div className='container_articles'>
      <div className='ellipseArticle'>
        <div className='containerarticle_background'>

          <div className='top_article'>
            <div className='left_side_article'>
              <LogoCard  name="Facebook" color="#35569E" img={face}/>
              <LogoCard  name="Twitter" color="#00AFF2" img={twit}/>
              <LogoCard  name="Instagram" color="#CE008F" img={insta}/>
            </div>
            <div className='right_side_article'>
              <img className='logo_article' src={logo} alt="logo_article"/>
              <h1 className='link_article' >Website Link Here</h1>
            </div>
          </div>
          <div className='gridcontainer_articles'>
              <ArticleCard className='article'  />
              <ArticleCard className='article'    /> 
              <ArticleCard className='article'  /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles;