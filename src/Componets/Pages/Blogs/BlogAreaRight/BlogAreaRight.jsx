import React from "react";
import BlogAreaRightData from "./BlogAreaRightData";
import { IoSearch } from "react-icons/io5";
import PopularPosts from "./PopularPosts";
import FooterHome from "../../Home/Home1/FooterHome/FooterHome";

const categories = [
  "Cyber Solutions",
  "Digital Marketing",
  "Consulting",
  "Tips & Guide",
  "IT Services",
];

const recentPosts = [
  "What Could 5g Change About The Way We Use Technology?",
  "3 Factors To Consider When Choosing A Managed IT Services",
  "How To Quickly Shift To A Work-from-home Business Model",
];

const archives = ["January 2024", "February 2024", "March 2024"];

const tags = [
  { name: "IT Solution", count: 10 },
  { name: "Managed Services", count: 15 },
  { name: "Digital Marketing", count: 10 },
  { name: "Industry", count: 12 },
  { name: "Cyber Solutions", count: 7 },
  { name: "Technology", count: 3 },
];

const BlogAreaRight = () => {
  return (
    <section className="blog-area pt-16 pb-24 px-10 bg-[#121225]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-2/3 w-full px-4">
            <BlogAreaRightData />
          </div>
          <div className="lg:w-1/3 w-full px-4 mt-8 lg:mt-0 border-l">
            <section className="widget widget_search mb-10">
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-[#EFA41C] p-2 ">
                  <IoSearch className="text-white h-6 w-6" />
                </button>
              </div>
            </section>
            <PopularPosts />

            <section className="widget widget_categories mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">
                Categories
              </h3>
              <div className=" bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
              {/* category */}
              <ul className="list-disc list-inside text-gray-300">
                {categories.map((category, index) => (
                    
                  <div key={index} className="mb-2">
                  
                    <a href="/" className="hover:text-[#EFA41C]">
                      {category}
                    </a>
                  </div>
                ))}
              </ul>
            </section>
            {/* Recent Posts */}
            <section className="widget widget_recent_entries mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">
                Recent Posts
              </h3>
              <div className=" bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <ul>
                {recentPosts.map((post, index) => (
                  <div key={index} className="mb-2 text-gray-300">
                    <a href="/" className="hover:text-[#EFA41C]">
                      {post}
                    </a>
                  </div>
                ))}
              </ul>
            </section>

            {/* Archives */}
            <section className="widget widget_archive mb-8">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">
                Archives
              </h3>
              <div className=" bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <ul className="list-disc list-inside text-gray-300">
                {archives.map((archive, index) => (
                  <div key={index} className="mb-2">
                    <a href="/" className="hover:hover:text-[#EFA41C]">
                      {archive}
                    </a>
                  </div>
                ))}
              </ul>
            </section>
            <section className="widget widget_tag_cloud">
              <h3 className="widget-title text-2xl font-semibold mb-4 text-white">Tags</h3>
              <div className=" bg-gray-200 rounded-full h-[2px] mb-4">
                <div
                  className="bg-[#EFA41C] h-[2px] rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="tagcloud flex flex-wrap text-gray-300">
                {tags.map((tag, index) => (
                  <a
                    key={index}
                    href="/"
                    className="border-2 hover:border-none  py-1 px-2 mr-2 mb-2 hover:bg-[#EFA41C] hover:text-white"
                  >
                    {tag.name}
                    <span className="tag-link-count ml-1  hover:text-white">
                      ({tag.count})
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    <FooterHome/>
      
    </section>
  );
};

export default BlogAreaRight;