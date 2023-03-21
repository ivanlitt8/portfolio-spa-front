import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SImageService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imageRef = ref(this.storage, 'image/' + name);
    uploadBytes(imageRef, file).then(res => { this.getImages() }).catch(err => console.log(err));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'image')
    list(imagesRef).then(async res => {
      for (let item of res.items) {
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    }).catch(err => console.log(err))
  }
}
