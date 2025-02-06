import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

interface ImageFiles {
  link: string; 
  id: string; 
}


const Gallery = () => {
     const [data, setData] = useState<ImageFiles[] | undefined>([])
     const [loading, setLoading] = useState<boolean>(false); 

     useEffect(() => {

      const getGalleryImages = async () => {
          setLoading(true)
          try {
              
              const response: any = await axios.get(`${import.meta.env.VITE_APP_API_URL}/admin/getGalleryImages`, ); 

              if (response.status === 200 || response.status === 201) {
                  setData(response.data.data);
              }

             
          } catch (err: any) {

              toast.error("Failed to fetch images"); 


          } finally {
              setLoading(false); 
          }
         


      }
      getGalleryImages(); 
  }, [])

    return (
      <div className="flex flex-col">
        <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-10 text-[#0000FF]">
          Gallery
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center m-5">
          {/* Image Items */}
          {data !== undefined && 

            data.map((_, idx) => (
              <div key={idx} className="h-52 overflow-hidden rounded-lg">
                <img
                  src={_.link}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;