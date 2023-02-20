import Image from "next/image";

export default function Slider() {
  return (
       <div>
        <div className="images">
            <Image src="/public/" alt="slider_images" width={300} height={300}/>
            
        </div>
       </div>
    )
}