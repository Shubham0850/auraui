import React from 'react';

const images = [
  "https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084",
  "https://www.banffcentre.ca/sites/default/files/Performing%20Arts/Spotify-Cover_Spoken-Word.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Mc7MHCuKO72ILBj-dC_uCQYo-Gz8ssBGShoMXCLWItNoqmb-2pldDUYvD1tEMQufMQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtvLVD4hg1Sn_Z-TKYuq7RB_kZ7UQOR4VsveDoVx_Jl02aWMnjx9ubAI31GzYZD56VtE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROANgnvpC541ZhYX2Hb7w7B_UWFBc3LVCDHw7oqTDLOH4m1WioQi2rJ-ALykzJ8xtJJAw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIUa53xwFu6KjIxtN7SPS1MX_uaN17leb3xPKF8NC9yRftdAr3dG0aMX35C3t5JUBAM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHI_CUKOkHrJU9t1rU8w3l-zcPpkcIE4cLJhVRu6YGQeVnKFNL5cnfI1PoV17doKAukE&usqp=CAU",
  "https://i.scdn.co/image/ab67706f00000002437f1fce2abda0c2ab2bec55",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoLo7jg5zSBDnzynko7aC8wnrcI4A3azfGBz41Cg98p52o_qDBbUHvi__Ld3s_9ayIzc&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRor_L27uKzzQvIpR8La8yu-Ns2CIW1e_v0sNVHHhkdkDr0DMZBP-rEfs7loxN0PfwX5UU&usqp=CAU"
];

const GalleryMusic: React.FC = () => {
  return (
    <div className="music-images">
      {Array.from({ length: 7 }).map((_, rowIndex) => (
        <div className="music-images-line" key={rowIndex}>
          {images.concat(images).map((src, colIndex) => (
            <div className="music-line" key={colIndex} style={{ backgroundImage: `url(${src})` }}>
              <div className="music-img" style={{ backgroundImage: `url(${src})` }}></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GalleryMusic;
