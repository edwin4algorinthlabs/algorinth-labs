import "../../app/globals.css"
import FooterContainer from "@/containers/Footer";
import DisplayPrices from "@/components/shared/price-display/DisplayPrices";
import Header from "@/components/shared/blog-header";
import { useEffect, useState } from 'react';
import Request from "@/components/shared/request";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
const contentful = require("contentful")
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
  const options = {
    renderNode: {
      'heading-1': (node, children) => <h1 className="text-4xl text-[#EA5501] font-bold mt-6 mb-4">{children}</h1>,
      'heading-2': (node, children) => <h2 className="text-3xl font-bold mt-5 mb-3">{children}</h2>,
      'heading-3': (node, children) => <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>,
      'heading-4': (node, children) => <h4 className="text-xl font-bold mt-3 mb-2">{children}</h4>,
      'heading-5': (node, children) => <h5 className="text-lg font-bold mt-2 mb-1">{children}</h5>,
      'heading-6': (node, children) => <h6 className="text-base font-bold mt-1 mb-1">{children}</h6>,
      'paragraph': (node, children) => <p className="text-base leading-7 text-justify my-3">{children}</p>,
      'unordered-list': (node, children) => <ul className="list-disc pl-5">{children}</ul>,
      'ordered-list': (node, children) => <ol className="list-decimal pl-5">{children}</ol>,
      'list-item': (node, children) => <li className="mb-2">{children}</li>,
      'blockquote': (node, children) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
    },
  };
  
export default function Data({blogData}){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <Header />
    <div className="mt-[160px]">
      <div className="flex justify-center items-center mt-4 mb-8">
        <div className="text-xl sm:text-[32px] font-bold pb-1 sm:pb-2 pt-4 text-justify top-[30px] text-[#EA5501] leading-relaxed px-[20px] sm:pt-6">
          {blogData ? documentToReactComponents(blogData.fields.title) : 'loading...'}
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#141414] mx-4 md:mx-8 lg:mx-16 xl:mx-20 h-[300px] rounded-lg overflow-hidden mb-8">
        <img
          src={blogData.fields.imageAPI.fields.file.url}
          alt="Blog Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="text-right italic pr-[20px]">
        {blogData ? blogData.fields.author : '...'} .{' '}
        {new Date(blogData.sys.updatedAt).toLocaleString()}
      </div>

       {/* Table of Contents Section */}
       <div className="mt-4 text-justify text-lg mb-8 leading-relaxed px-[40px]">
        <h2 className="text-xl sm:text-[32px] font-bold pb-1 sm:pb-2 pt-4 text-justify leading-relaxed px-[20px] sm:pt-6">Table Of Contents</h2>
        {blogData ? documentToReactComponents(blogData.fields.tableOfContents,options):"loading"}
      </div>


      <div className="mt-4 text-justify text-lg mb-8 leading-relaxed px-[40px]">
        {blogData ? documentToReactComponents(blogData.fields.content, options) : 'Loading'}
      </div>
      <Request />
      <DisplayPrices />
      <FooterContainer />
    </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const entries = await client.getEntries();
    const ids = entries.items.map((entry) => entry.sys.id);

    const paths = ids.map((id) => ({ params: { id } }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error fetching entries:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const entry = await client.getEntry(params.id);

    return {
      props: { blogData: entry },
    };
  } catch (error) {
    console.error("Error fetching entry:", error);
    return {
      notFound: true,
    };
  }
}