import "../../app/globals.css"
import FooterContainer from "@/containers/Footer";
import DisplayPrices from "@/components/shared/price-display/DisplayPrices";
import Header from "@/components/shared/header";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
const contentful = require("contentful")
const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })

export default function Data({blogData}){
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (

  <div>
    <div className="flex justify-center items-center mt-4 mb-8">
    <div className="text-xl sm:text-[32px] font-bold pb-1 sm:pb-2 pt-4 sm:pt-6">
        {blogData ? documentToReactComponents(blogData.fields.title) : "loading..."}
    </div>
  </div>
   <div className="flex justify-center items-center bg-[#141414] mx-4 md:mx-8 lg:mx-16 xl:mx-20 h-[300px] rounded-lg overflow-hidden mb-8">
    <img
        src={blogData.fields.imageAPI.fields.file.url}
        alt="Blog Image"
        className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div className="text-right italic ">
  {blogData? blogData.fields.author: "..."} . {new Date(blogData.sys.updatedAt).toLocaleString()}
  </div>
  <div className="mt-4 text-lg mb-8">
    {blogData ? documentToReactComponents(blogData.fields.content) :"Loading"}
  </div>
  <DisplayPrices/>
  <FooterContainer/>
  </div>)
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
    let blogData = null
    try {
      await client.getEntry(params.id)
  .then((entry) =>{
    blogData = entry;
}).catch(console.error)
      
      return {
        props: { blogData },
      };
    } catch (error) {
      console.error(error);
      return {
        notFound: true,
      };
    }
  }