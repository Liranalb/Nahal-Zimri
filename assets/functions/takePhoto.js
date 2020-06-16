import { storage, db,auth } from '../../config/Firebase'
import ImagePicker from 'react-native-image-crop-picker';




uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };
      // this helps us get a blob
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      
      xhr.send(null);
    });
  }

  uploadToFirebase = (blob,location) => {
    return new Promise((resolve, reject)=>{
      var storageRef = storage.ref();
      storageRef.child(location).put(blob, {
        contentType: 'image/jpeg'
      }).then((snapshot)=>{
        blob.close();
        // console.log("\n\n this: "+ storage.ref().child(location).getDownloadUrl());
        console.log("\n\n\nbla\n");
        resolve(snapshot);
      }).catch((error)=>{
        reject(error);
      });
    });
  }
/*
Gets two locations , storage and DB and , recive a photo from the
client and put it in the right paths

*/
  sayCheese = (location, DB_Path) => { console.log("start");
  
    ImagePicker.openCamera({
        width: 400,
        height: 500,

    }).then((result)=>{ 
      
      if (!result.cancelled) {
        // User picked an image
        
        return uriToBlob(result.path)

      }
      else
           console.log("\n\nCanceled\n\n");

    }).then((blob)=>{

      return uploadToFirebase(blob,location);

    }).then((snapshot)=>{

      console.log("File uploaded ");
      storage.ref().child(location).getDownloadURL().then( (url) => {
            db.ref(DB_Path+"/imageLink").set(url)
      })
   
    }).catch((error)=>{
      console.log("\n\nCanceled\n\n");
      return -1;


    }); 
      return 0;
  }

  export default sayCheese;
