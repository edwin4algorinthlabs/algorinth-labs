"use client"
// containers/Blogs.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RequestDemo from '@/components/shared/request';
import axios from 'axios';
import { useEffect,useState} from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ReactDOMServer from 'react-dom/server';
import Progress from '@/components/shared/Progress';
export default function BlogsContainer() {
  const [blogData, setBlogData] = useState(null)
  const [tiles, setTiles] = useState(2);
  
  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await axios.get('/api/blog', {
          params: { tiles: tiles }
        });
  
        console.log(response.data.richText);
        setBlogData(response.data.richText);
        console.log(typeof blogData);
      } catch (error) {
        console.log(error);
      }
    }
  
    getBlogData();
  }, [blogData, tiles]);
  
    return (
    <div className="pt-[120px] w-full sm:w-[85vw] font-rubik mx-auto min-h-screen px-6 md:px-12 lg:px-24">
        <h3 className="text-center text-2xl sm:text-5xl font-bold my-10 sm:my-20">Algorinth Labs Blog</h3>
        {!blogData &&<div className="flex items-center justify-center mt-10">
        <Progress message="Loading... Please Wait." />
        </div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 w-full max-w-[1244px] mx-auto duration-300">
            {/* =============== Blog =============== */}
            {/* {blogData ? blogData.map((item,index)=>(
                <Link href={`/blog/${item.sys.id}`} target='_blank'> */}
                {blogData ? blogData.map((item, index) => (
                  <Link key={index} href={`/blog/${item.sys.id}`}>
                <div className="flex flex-col w-full max-w-[602px]">
                <div className="bg-[#141414] w-full h-[300px] rounded-lg">
                  {/* <img src={item.fields.imageAPI.fields.file.url} className="w-full h-full object-cover rounded-lg"/> */}
                  <Image 
                      src={`https:${item.fields.imageAPI.fields.file.url}`} 
                      alt={item.fields.imageAPI.fields.title}
                      width={item.fields.imageAPI.fields.file.details.image.width}
                      height={item.fields.imageAPI.fields.file.details.image.height}
                      className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl sm:text-[32px] font-bold pb-1 sm:pb-2 pt-4 sm:pt-6">{item ? documentToReactComponents(item.fields.title):"loading..."}</h2>
                <p className="text-xs sm:text-xl text-[#525252]">More details on it</p>
                <p className="text-base sm:text-2xl py-4 sm:py-6">{item ? ReactDOMServer.renderToStaticMarkup(documentToReactComponents(item.fields.content)[1]).replace(/<[^>]+>/g, '').slice(0,100)+" ..." :"Loading"}</p>
                <p className="text-xs sm:text-xl text-[#525252]">{item? item.fields.author: "..."} . {new Date(item.sys.updatedAt).toLocaleString("en-US")}</p>
                </div>
                </Link>
            )):  <div className="flex items-center justify-center mt-10">
           
          </div>}
        </div>
        <div className="flex items-center justify-center">
            <button type="button" className="h-[54px] w-[330px] sm:h-20 text-primary text-base sm:text-2xl font-semibold border-[3px] border-primary rounded-lg mt-20 sm:mt-[100px] mb-20" onClick={()=>{setTiles(tiles + 1)}}>Load More</button>
        </div>
        {/* ================================ */}
        <RequestDemo />
    </div>
    )
}