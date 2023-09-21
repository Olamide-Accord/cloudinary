import axios from "axios";
import { useState } from "react";


const UploadFile = () => {
  const preset_key ='xqux3vf3';
  const cloud_name = 'danefpgpm';
  const [image, setImage] = useState()
  const handleFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then((res) => setImage(res.data.secure_url)).catch(err => console.log(err))
  }

  return (
    <div>
      <input type='file' name='image' onChange={handleFile} />
      <img src={image} style={{width: '200px'}} />
    </div>
  )
}

export default UploadFile