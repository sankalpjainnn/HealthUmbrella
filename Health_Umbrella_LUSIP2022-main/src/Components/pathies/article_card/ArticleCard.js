import React from 'react'
import './articlecardStyles.css'
import { Link } from 'react-router-dom';
export const ArticleCard = (props) => {
  return (
    <>
      <div className='container'>

        <div className='container_articlecard'>

          <div className='articlecard'>
            <h2 className='heading_articlecard'>{props.name} </h2>
            <p className='data_articlecard'>{props.data}</p>
          </div>

        </div>
        <Link className='art_tit' to='/pathy/homeopathy/ArticlesBooks'>
          <h4 className='art_tit_link'>Link to pdf or something</h4>
        </Link>
      </div>
    </>
  )
}
