import Homepage from '@/components/Homepage/Homepage'

export default function Home({data}) {
  const options = {
    method : "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({name : "Mark Vivian", age: 19})
  }
  
  fetch("http://localhost:3000/userJs", options)
  .then(response => {
    if(response.ok){
      console.log("the response is ok")
      return response.json()
    }else{
      console.log("the reponse is not ok")
    }
  })
  .then(response => console.log(JSON.stringify(response)))
  .catch(err =>{ console.log(`an error occurred while posting the test data ${err}`) })
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