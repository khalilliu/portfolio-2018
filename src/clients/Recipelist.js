import React, {Component} from 'react';
import SVG from 'react-svg-inline';



const Recipelist = () => 
  <div>
    <section className="container full">
      <div className="col-12-of-12">
        <img
          src={require('../img/recipelist/macbook.jpg')}
          alt="Recipelist For Web"
        />
      </div>
    </section>
    <section className='container'>
      <div className='client-quote'>
       <blockquote>
       飞洒发顺丰卡收发卡首付款撒开发商开发商开发费卡夫卡上
        飞洒发顺丰卡收发卡首付款撒开发商开发商开发费卡夫卡上
        飞洒发顺丰卡收发卡首付款撒开发商开发商开发费卡夫卡上
        飞洒发顺丰卡收发卡首付款撒开发商开发商开发费卡夫卡上
        </blockquote>
      <p>
      Recipelist was initially built entirely on Rails but was later written
      in React.js, using the Rails rest API. Later on, the method for
      querying data was transitioned to GraphQL to improve performance.
      </p>
      </div>
    </section>

    <section className='container'>
      <div className='col-12-of-12'>
         { /*<SVG svg={Logo} width='100%'/>*/ }
      </div>
    </section>
  </div>

  export default Recipelist;