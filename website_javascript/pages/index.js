import Homepage from '@/components/Homepage/Homepage'

export default function Home({data}) {
  return (
    <>
        <Homepage data={data}/>
    </>
  )
}

export async function getStaticProps(){
  const slider_images_data = await fetch("http://localhost:3000/slider_images")
  const slider_images = await slider_images_data.json()
  return{props : {
    data :  slider_images
  }}
}