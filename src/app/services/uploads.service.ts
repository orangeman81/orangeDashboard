import { Injectable } from '@angular/core';
import { Api } from './api.service';

@Injectable()
export class UploadsService {

  public heroImage: Blob = null;
  public heroImageName: string = "";
  public awsUrl: string = "https://s3.eu-west-3.amazonaws.com/modae-portfolio/";
  public gallery: Array<Blob> = [];
  public galleryList: Array<any> = [];

  constructor(private api: Api) { }

  upload(heroImageName: string = this.heroImageName, file: Blob = this.heroImage): void {
    if (this.heroImageName !== "") {
      this.api
        .service('uploads')
        .create({
          id: heroImageName,
          uri: file
        })
        .then(response => {
          console.log('Server responded with: ', response);
          this.heroImage = null;
          this.heroImageName = "";
        })
    }
    if (this.galleryList.length > 0) {
      this.gallery.forEach((img, i) => {
        this.api
          .service('uploads')
          .create({
            id: this.galleryList[i].imgName,
            uri: img
          })
          .then(response => {
            console.log('Server responded with: ', response);
            this.gallery = [];
            this.galleryList = [];
          })
      });
    } else {
      return null;
    }
  }

  getFile(event) {
    let fileList: FileList = event.target.files;
    let heroImage = event.target.files[0];
    this.heroImageName = Date.now() + '-' + heroImage.name;
    const reader = new FileReader();
    reader.readAsDataURL(heroImage);
    reader.addEventListener("load", f => {
      this.heroImage = reader.result;
    }, false);
  }

  getGallery(event) {
    let gallery: FileList = event.target.files;
    for (let i = 0; i < gallery.length; i++) {
      let img = gallery[i]
      this.galleryList.push({
        imgName: Date.now() + '-' + img.name,
        imgUrl: this.awsUrl + Date.now() + '-' + img.name
      });
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.addEventListener("load", f => {
        this.gallery.push(reader.result);
      }, false);
    }
  }

  remove(file: string) {
    this.api
      .service('uploads')
      .remove(file);
  }

}
