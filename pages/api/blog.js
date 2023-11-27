// pages/api/blog.js
import { createClient } from "contentful";

export default async function handler(req, res) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  });

  const noOfTiles = req.query.tiles;
  let richText = null;

  try {
    const entries = await client.getEntries();
    richText = noOfTiles < entries.items.length ? entries.items.slice(0, noOfTiles) : entries.items;
    res.status(200).json({ message: "Blog content fetched successfully", richText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}




// "use client"
// import React from "react"
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { useEffect,useState } from "react";
// const contentful = require("contentful")
// const client = contentful.createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     environment: 'master', // defaults to 'master' if not set
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
//   })

//   // export default async  (req, res) => {
//   export default async function Blog (req, res) {
//     console.log("req.query.tiles: " + req.query.tiles);
//   let noOfTiles = req.query.tiles
//    let richText = null
//    try{

//     await client.getEntries().then((entries) => {
//         richText = noOfTiles < entries.items.length ? entries.items.slice(0,noOfTiles) :entries.items
//       })
//       .catch(console.error)
//      console.log("hello world")
//      res.json({ message: "Blog content fetched successfully", richText });
//    }catch (error) {
//    console.error(error);
//    res.status(500).json({ error: "Internal Server Error" });
//  }
//  }