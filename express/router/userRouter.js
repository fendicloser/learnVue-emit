const express = require('express')

const bodyPaser=require('body-parser')

const router= express.Router()

var data={
    good:[
        {
            name:'book',
            imageUrl:'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            number:0,
            detail:'book 限时限量book'
        },
        {
            name:'food',
            imageUrl:'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            number:0,
            detail:'food 限时限量 food'
        },
        {
            name:'achole',
            imageUrl:'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            number:0,
            detail:'brike 限时限量 food'
        },
        {
            name:'chair',
            imageUrl:'http://static.galileo.xiaojukeji.com/static/tms/default_header.png',
            number:0,
            detail:'chair 限时限量 food'
        }
    ]
}


router.get('/try',(req,res)=>{
    console.log(req.query)
    res.json(data)
})
router.get('/tryChartCar',(req,res)=>{
    res.json(data)
})


module.exports=router

