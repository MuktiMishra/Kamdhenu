const Gallery = () => {
    return (
      <div className="flex flex-col">
        {/* Gallery Title */}
        <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-10 text-[#0000FF]">
          Gallery
        </div>
  
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center m-5">
          {/* Image Items */}
          {Array(6)
            .fill("")
            .map((_, idx) => (
              <div key={idx} className="h-52 overflow-hidden rounded-lg">
                <img
                  src="./km.jpg"
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