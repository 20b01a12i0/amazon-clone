import React from 'react';

import './Home.css'
import Products from './Products';
const Home = () => {
    return (
        <div className='home'>
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
         <div className="home_row">
             <Products 
             id={1}
             title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
             price={109.95}
             rating={5}
             image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
             />
             <Products 
             id={2}
             title="Mens Casual Premium Slim Fit T-Shirts "
             price={450}
             rating={4}
             image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
             />
         </div>
         
         <div className="home_row">
             <Products 
             id={4}
             title="Mens Casual Slim Fit"
             price={15.99}
             image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
             rating={5}
             
             />
             <Products 
            id={5}
            title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
            price={695}
            image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" 
            rating={5}
             />
             <Products 
             id={6}
             title="Solid Gold Petite Micropave "
             price={168} 
             image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
             rating={2}
             />
         </div>
         <div className="home_row">
             <Products 
             id={7}
             title="White Gold Plated Princess"
             price={9.99}
             image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" 
             rating={4}
             />
             <Products
             id={8}
             title="Pierced Owl Rose Gold Plated Stainless Steel Double"
             price={700}
             rating={4}
             image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
             />
             <Products 
             id={9}
             title="WD 2TB Elements Portable External Hard Drive - USB 3.0"
             price={350}
             rating={4}
             image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
             />
         </div>
         <div className="home_row">
             <Products 
             id={10}
             title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
             price={109.95}
             rating={5}
             image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
             />
             <Products 
             id={11}
             title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
             price={450}
             rating={4}
             image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
             />
             <Products 
             id={12}
             title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
             price={850}
             rating={5}
             image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
             />
         </div>
         <div className="home_row">
             <Products 
             id={13}
             title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
             price={555.95}
             rating={3}
             image="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
             />
             <Products 
             id={14}
             title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
             price={450}
             rating={4}
             image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
             />
             <Products 
             id={14}
             title="Rain Jacket Women Windbreaker Striped Climbing Raincoats"
             price={450}
             rating={4}
             image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
             />
         </div>
         {/* <div className="home_row">
             <Products 
             id={15}
             title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
             price={109.95}
             rating={5}
             image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
             />
             <Products 
             id={16}
             title="Mens Casual Premium Slim Fit T-Shirts "
             price={450}
             rating={4}
             image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
             />
             <Products 
             id={17}
             title="Mens Casual Premium Slim Fit T-Shirts "
             price={450}
             rating={4}
             image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
             />
         </div> */}
        </div>
    );
};

export default Home;

   
    
    

    

    //       {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":<img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" />,"rating":5},
    //       {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":<img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" />,"rating":3},
    //       {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":<img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" />,"rating":3},
    //       {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":<img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />,"rating":4},
    // {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":<img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" />,"rating":5}
    //     ]