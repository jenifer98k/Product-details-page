import React from 'react'

function ProductListPage() {
  
  return (
    <>

    <div className='container'>
        <div className='menubar'>
        <div className='items'><i class='fa fa-home'></i></div>   
        <div className='items'><i class='fas fa-angle-right'></i></div> 
        <div className='items'>Electronics</div>
        <div className='items'><i class='fas fa-angle-right'></i></div> 
        <div className='items'>Apple Watch Series 5</div> 
        </div>

{/*-------------------------------PRODUCT IMAGE AND DETAILS -------------------------------------------*/}
   <div className='product-details'>
<div className='small-img'>
    <p>
<img src="/img/parts1.jpeg" alt="" className='watch-img-small'/>
</p>

<p>
<img src="/img/parts3.jpeg" alt="" className='watch-img-small'/>
</p>
<p>
<img src="/img/parts4.jpeg" alt="" className='watch-img-small'/>
</p>
<p>
<img src="/img/parts5.jpeg" alt="" className='watch-img-small'/>
</p>
{/* <p>
<img src="/img/parts5.jpeg" alt="" className='watch-img-small'/>
</p> */}
</div>

<div className='img2'>
<img src="/img/mainf.png" alt="" className='watch-img-big'/>  
</div>
<div className='details'>
    <h5>Apple Watch series 5</h5> 
    <p> By Apple</p>
    <p><span className='border-right'>₹1,40,000</span> <span><span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"> <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span></span></span></p>
<p>Available- <span className='green-text'>In Stock</span></p>
<p>Qty:
 
    <span className='add'>
   <button>-</button>
   <input type="text" placeholder='1'/>
   <button>+</button>
 
    </span>
  </p>
<p>A watch is a timeless stylearious occasions, from formal events to casual outings. Many watches have additional features such as a stopwatch, date display, and even GPS tracking. The accuracy and precision of a watch are unmatched by any other time-telling device. They can be passed down through generations and hold sentimental value. A watch is not just a tool for keeping time, but a symbol of sophistication, elegance, and status.</p>
<p><i class="fa fa-shopping-cart"></i> <span>Free Shipping</span></p>
<p>₹ EMI option Available</p>

<p>
 Colors   
 <p>
 <span class="dot dot1 bg-primary"></span>
  <span class="dot dot2 bg-success"></span>
  <span class="dot dot3 bg-info"></span>
  <span class="dot dot4 bg-danger"></span>   
 </p>
</p>

</div>
<div></div>
   </div>
 </div>
   
    </>
  )
}

export default ProductListPage
