import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const PL = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div className='container-fluid '>
       <p className='buttons'>
<button className='purplebtn'><i class="fa fa-shopping-cart"></i><span className='btns3'>Add to Cart</span></button> 
<button className='light-btn '><i class="fa fa-heart text-secondary"></i><span className='btns3'>Add to Wish list</span> </button> 
<button className='blue-btn'><i class="fa fa-share-alt"></i><span className='btns3'> Share</span></button> 
</p>

  

   <div className='prosOfProducts'>
   <div className='pop-1'>
  <h1 >
  <i class='fas fa-medal  '></i>   
  </h1>
  <p>100% Original</p>
  <p>We’ve trappropriate requests
  We’ve trappropriate requests.</p>
  </div>
  <div>
  <h1>
  <i class='fas fa-clock'></i>   
  </h1>
  <p>10 Day Replace,ment</p>
  <p>We’ve trappropriate requests
  We’ve trappropriate requests.</p>
  </div>
  <div>
  <h1>
 
<i class='fas fa-shield-alt'></i> 
  </h1>
  <p>10 Day Replace,ment</p>
  <p>We’ve trappropriate requests
  We’ve trappropriate requests.</p>
  </div>
   </div>
   <div className='related-products'>
    <div className='rel-header'>
<p><b>Related products</b></p>
<p>People also search for this item</p>
   </div>
   <Carousel responsive={responsive} className="CAROSEL">
  <div className='item'> 
  <p className=''> <img src="/img/img1.jpeg" alt='' className='imgc' /> </p>
  <p>Apple Watch series 5 </p> 
  <p>Every iPhone 14 RED purchase now contributes directly</p>
<p>₹ 40,000</p>
<p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
</div>

  <div className='item'>
    <p><img src="/img/img2.jpeg" alt='img' className='imgc' />
   </p>

  <p>Apple Watch series 5 </p> 
  <p>Every iPhone 14 RED purchase now contributes directly</p>
  <p>₹ 40,000</p>
  <p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
  </div>
  <div className='item'>
  <p><img src="/img/img3.jpeg" alt='img' className='imgc'/> </p>
 
  <p>Apple Watch series 5 </p>  <p>Every iPhone 14 RED purchase now contributes directly</p>
 <p>₹ 40,000</p>
 <p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
  </div>
  
  <div className='item'>
  <p><img src="/img/img4.jpeg" alt='img'  className='imgc' />  </p>
 
  <p>Apple Watch series 5 </p> 
  <p>Every iPhone 14 RED purchase now contributes directly</p>
  <p>₹ 40,000</p>
  <p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
  </div>
  <div className='item'>
  <p><img src="/img/img4.jpeg" alt='img'  className='imgc' />  </p>
  <p>Apple Watch series 5 </p> 
  <p>Every iPhone 14 RED purchase now contributes directly</p>
<p>₹ 40,000</p>
<p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
  </div>
  <div className='item'>
  <p><img src="/img/img4.jpeg" alt='img' className='imgc' />  </p>
  <p>Apple Watch series 5 </p> 
  <p>Every iPhone 14 RED purchase now contributes directly</p>
<p>₹ 40,000</p>
<p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
  </div>
  <div className='item'>
  <p><img src="/img/img4.jpeg" alt='img'  className='imgc' />  </p>
  <p>Apple Watch series 5 </p> 
  <p>Every iPhone 14 RED purchase now contributes directly</p>
<p>₹ 40,000</p>
<p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
  </div>
 
</Carousel>
   </div>
    </div>
  )
}

export default PL
