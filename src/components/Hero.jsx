import React from "react";
import { Link } from 'react-router-dom';

export default function Hero() {
	return <>
		<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <p class="text-8xl mb-4 font-bold text-gray-900 ">Deanonimize
        <br class="hidden lg:inline-block" />Transactions
      </p>
      <p class="mb-8 text-2xl leading-loose">If you've ever been a victim of a scam or concerned about money used in criminal activities, rest assured, we can help you trace it back. Your financial safety matters, and we're here to make sure you're in control. Together we contribute to create a safer digital world!</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"><Link to='/explore'>Explore</Link></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://www.howitworksdaily.com/wp-content/uploads/2015/12/bitcoin-stock.jpg" />
    </div>
  </div>
</section>

<section class="bg-yellow-500 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white leading-relaxed">Welcome to our SIH Hackathon project! Explore our project which is designed to backtrack any transaction.<br />Click the Explore button to find out more.</h1>
      <button class="flex-shrink-0 text-yellow-400 bg-white border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 hover:text-white rounded text-lg mt-10 sm:mt-0"><Link to='/explore'>Explore</Link></button>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://www.bitcoin.com/static/69e5b04558dd2836f918730358a5d75b/6a598/homepage-buy-sell.webp" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font text-7xl mb-4 font-medium text-gray-900 leading-snug">Easy to use.
        <br class="hidden lg:inline-block" /> Quick
      </h1>
      <p class="mb-8 text-2xl leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo aut, et laboriosam quis deserunt voluptate. Cupiditate, repellat et quaerat assumenda molestias sunt est, dolorem.</p>
      <div class="flex justify-center">
			<button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"><Link to='/explore'>Explore</Link></button>
      </div>
    </div>
  </div>
</section>
	</>
}