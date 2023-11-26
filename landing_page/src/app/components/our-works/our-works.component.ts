import { Component } from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.css']
})
export class OurWorksComponent {
  images: any[] = [
    { img: "https://i.pinimg.com/1200x/ee/f9/1e/eef91e9330b18d0d6a2b5774d153a8f8.jpg" },
    { img: "https://i.pinimg.com/1200x/ee/f9/1e/eef91e9330b18d0d6a2b5774d153a8f8.jpg" },
    { img: "../../../assets/image/villas/WhatsApp Image 2023-10-09 at 19.19.29_2ff62652.jpg" },
    { img: "../../../assets/image/villas/WhatsApp Image 2023-10-09 at 19.19.29_7b4c3853.jpg" },
    { img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" },
    { img: "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" },
    { img: "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?cs=srgb&dl=pexels-kawaiiart-1767434.jpg&fm=jpg" },
    { img: "https://images.unsplash.com/photo-1632060203408-851cf27a6c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Um84eTVWa2JUQUV8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=60" },
    { img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=sph" },
    { img: "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg" },

  ]

  p: number = 1;
  collection: any[] = this.images;
}
