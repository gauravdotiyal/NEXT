import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils" 

export default function ServerRoutePage(){
    console.log('Server Route Rendered');
    // as it is clentonly function this will fail build process 
    // const ans=clientSideFunction();
    const result=serverSideFunction();
    return (
        <>
          <h1>Server Route Page</h1>
          <p>{result}</p>
          {/* <p>{ans}</p> */}
          <ImageSlider/>
        </>
    )
} 