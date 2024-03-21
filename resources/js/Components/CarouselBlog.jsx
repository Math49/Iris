import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "@inertiajs/react";

function CarouselBlog(blogs) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dotsClass: "slick-dots",
  };
  blogs = blogs.blogs;
  console.log(blogs);
  return (
    <div className="slider-container">
      <Slider {...settings} className="mb-20">
        {blogs && blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(blog => (
          <div key={blog.id}>
              <div className='border-[.5px] border-bleu shadow-[0px_4px_16px_0px_#00000010] p-5 rounded-md w-[95%] h-[50vh] flex flex-col justify-between mb-6'>
                    {blog.media_type === 'image' ?
                      <img className='rounded-md w-[100%] h-[55%]' src={blog.media} alt="" />
                    :
                      <video className='rounded-md w-[100%] h-[55%]' src={blog.media}></video>
                    }
                    <div className='mt-4'>
                      <h3 className='text-2xl line-clamp-2 leading-6 font-semibold'>{blog.title}</h3>
                      <p className='mt-2 text-sm line-clamp-2'>{blog.content}</p>
                    </div>
                  <p className='text-sm mt-4 font-semibold'>publié le {new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselBlog;