import React, { useEffect, useState } from 'react'
const imageUrl = 'https://i.imgur.com/fHyEMsl.jpg'

export default function App () {
  const [img, setImg] = useState()

  //Fetch the image from API and store the image with Usestate
  const fetchImage = async () => {
    const res = await fetch(imageUrl)
    const imageBlob = await res.blob()
    const imageObjectURL = URL.createObjectURL(imageBlob)
    setImg(imageObjectURL)
  }

  useEffect(() => {
    fetchImage() //* call our fetchImage function in a useEffect hook.
  }, [])
  //Use the fetched image inside the component
  return (
    <>
      <img src={img} alt='icons' />
    </>
  )
}
