Cloudinary

Create your react project using create-react-app or vite
Navigate into the project folder

        cd project-folder

Install the Required Dependencies:
 
        npm install cloudinary

        npm install axios

Go to the cloudinary website and sign up
     https://cloudinary.com/
     
Proceed to the settings on the website, on the sidebar, click on "Upload" under "Production environment settings", under "Upload presets", click on "add upload presets". A "upload preset name" will be automatically generated which you can change if you wish to. Then, change the signing mode from "Signed" to "Unsigned" and save.

Back in VSCode, create a file for the cloudinary functionalities such as "UploadFile".

Set up variables for the preset_key which is the same as the "upload preset name" from the website and cloud_name whose value is in the dashboard of your cloudinary account.

        const preset_key = 'presetkey';
        const cloud_name = 'your_cloud_name';
        
Also create a state to handle the image you want to upload.

        const [image, setImage] = useState()
        
Now create a handleChange/submit function that will implement the uploading of the image

        const handleFile = (e) => {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', preset_key);
          axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then((res) => setImage(res.data.secure_url)).catch(err => console.log(err))
        }

Now, return the UI you want but it needs to have an input element with the type being file and you can attach the handleFile function to the input using onChange:

      return (
        <div>
          <input type='file' name='image' onChange={handleFile} />
          <img src={image} style={{width: '200px'}} />
        </div>
      )

You can use the UploadFile file anywhere you want such as:

      import UploadFile from "./UploadFile";

      function App() {
        return (
          <div>
            <h1>Image Upload</h1>
            <UploadFile />
          </div>
        );
      }

 Run Your React Application

 Your React app will start, and you should be able to upload images to Cloudinary using the ImageUpload component.

Remember to handle any additional styling, error handling, and user feedback as needed for your application. Additionally, you can explore Cloudinary's documentation for more advanced features like image transformations and optimizations.
