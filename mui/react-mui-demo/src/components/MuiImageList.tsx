import { ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import { title } from 'process'
import React from 'react'

const MuiImageList = () => {
    const itemData = [
        {img: "",title: "img 1"},
        {img: "",title: "img 2"},
        {img: "",title: "img 3"},
        {img: "",title: "img 4"},
        {img: "",title: "img 5"},
        {img: "",title: "img 6"},
        {img: "",title: "img 7"},
        {img: "",title: "img 8"},
        {img: "",title: "img 9"},
        {img: "",title: "img 10"},
        {img: "",title: "img 11"},
        {img: "",title: "img 12"},
        {img: "",title: "img 1"},
        {img: "",title: "img 2"},
        {img: "",title: "img 3"},
        {img: "",title: "img 4"},
        {img: "",title: "img 5"},
        {img: "",title: "img 6"},
        {img: "",title: "img 7"},
        {img: "",title: "img 8"},
        {img: "",title: "img 9"},
        {img: "",title: "img 10"},
        {img: "",title: "img 11"},
        {img: "",title: "img 12"},
    ]
  return (
    <Stack spacing={4}>
        <ImageList sx={{width: 500, height: 500}} cols={3} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                    <ImageListItemBar title={item.title}/>
                </ImageListItem>
            ))}
        </ImageList>
    </Stack>
  )
}

export default MuiImageList
