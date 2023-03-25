import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SImageService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string, folder: string = 'image') {
    const file = $event.target.files[0];
    const imageRef = ref(this.storage, folder + '/' + name);
    uploadBytes(imageRef, file).then(res => { this.getImages(folder) }).catch(err => console.log(err));
  }

  getImages(folder: string = 'image') {
    const imagesRef = ref(this.storage, folder)
    list(imagesRef).then(async res => {
      for (let item of res.items) {
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    }).catch(err => console.log(err))
  }
}
