import User from "../model/userSchema"
import IUser from "../interfaces/IUser";
import { randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import config from '../config/keys'
import Product from '../model/product'
import mongoose from "mongoose";
import fs from 'fs';
const createService = async (inputData: any, user: any): Promise<{ _id: any; err: any }> => {
  try {
    const item = await Product.create({
      ...inputData,
      createdBy: (user && user?._id) || undefined,
    });
    if (!item) {
      return { _id: null, err: [{ code: 'RECORD_NOT_CREATED' }] };
      // throw new Error('Company cannot be created');
    }

    const itemJSON = item.toObject();
    return { _id: itemJSON._id, err: null };
  } catch (error) {
    return { _id: null, err: [{ code: error }] };
  }
}

const listService = async (inputData: any, user: any): Promise<{ list: any; count: any, err: any }> => {
  try {
    const result: any = await Product.aggregate([
      {
        $match: { isDeleted: false }
      },
      {
        $facet: {
          countDocs: [
            {
              $group: {
                _id: null,
                count: {
                  $sum: 1,
                },
              },
            },
          ],
          list: [{ $sort: { createdAt: -1 } }]
        }
      }
    ])
    return { list: result[0].list, count: result[0].countDocs, err: null }
  } catch (error) {
    return { list: null, count: null, err: error }
  }
}

const getService = async (_id: any, user: any): Promise<{ item: any; err: any }> => {
  try {
    const item = await Product.findOne({ isDeleted: false }, []);

    if (item) {
      const itemJSON = item.toJSON();
      return { item: itemJSON, err: null };
    } else return { item: null, err: [{ code: 'RECORD_NOT_FOUND' }] };
  } catch (error) {
    return { item: null, err: error }
  }
}


const updateService = async (id: string, inputData: any, user: any): Promise<{ _id: any; err: any }> => {
  try {
    const item = await Product.findOneAndUpdate(
      { _id: id, isDeleted: false },
      {
        ...inputData
      },
    );

    if (!item) {
      return { _id: null, err: [{ code: 'RECORD_NOT_FOUND' }] };
    }

    return { _id: item._id, err: null };
  } catch (error) {
    return { _id: null, err: error };
  }
}

const importdataService = async (inputData: any, user: any): Promise<{  count: any, err: any }> => {
  try {
    let rawdata = fs.readFileSync('/home/sumitprajapti/NodeProject/QuickCart/server/src/service/data.json');
    let jsondata= JSON.parse(rawdata as any);

    const insertData:any=[];
    jsondata.forEach((el:any)=>{
      const images=[];
      images.push(el?.galleryThumbnails)
      insertData.push({
        productName:el?.title,
        price:{
          value:el?.price?.value,
          currency:el?.price?.currency,
          },
        description:el?.description,
        ratings:{stars:el?.stars,reviewsCount:el?.reviewsCount},
        images:el?.highResolutionImages,
        category:"Clothes/Shoes",
        seller:el?.seller,
        numOfReviews:el?.reviewsCount,
        user:"667130061d1dc368da645274"
      })
    })

    const result=await Product.insertMany(insertData);


    return {count: null, err: null }
  } catch (error) {
    console.log(error);
    return {  count: null, err: error }
  }
}

export {
  createService,
  listService,
  getService,
  updateService,
  importdataService
};