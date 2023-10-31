"use client"
import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEffect,useState } from "react";
const contentful = require("contentful")
const client = contentful.createClient({
    space: 'hxqm2du3oh7j',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'O6DlrG-NCdovo84zhtSiMizryFQBUKCGTbElzbqdhfA'
  })

  export default async (req, res) => {
   let richText = null
   try{

    await client.getEntries().then((entries) => {
        richText = entries.items
        // console.log(`${richText}`)
      })
      .catch(console.error)
     console.log("hello world")
     res.json({ message: "Blog content fetched successfully", richText });
   }catch (error) {
   console.error(error);
   res.status(500).json({ error: "Internal Server Error" });
 }
 }