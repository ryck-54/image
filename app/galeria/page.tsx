'use client'

//import { Template } from '../components/Template';
//import { ImageCard } from '../components/Image';
import { Template, ImageCard,  } from '@/components';
import { ImageService, useImageService } from '@/resource/service';
import { Image } from '@/resource/image'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';

export default function Galeria() {
  const router = useRouter();
  
  const useService = useImageService()
  const[images, setImages] = useState<Image[]>([])
  const [query,setQuery] = useState<string>('')
  const [extension, setExtension] = useState<string> ('')

  async function searchImages() {
    const result = await useService.buscar(query,extension);
    setImages(result);
    console.log(query, extension)
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard key = {image.url}
                 imageName = {image.name} 
                 imageUrl = {image.url}
                 extension = {image.extension}
                 imageSize = {image.size}
                 uploadDate = {image.uploadDate}
      />
    )
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
   
      <Template>

        <section className="flex flex-col items-center justify-center my-5">
            <div className="flex space-x-4">
              <input type="text" 
              onChange={(e) => setQuery(e.target.value)}
              className="border px-4 py-2 rounded-lg text-White-900" placeholder="Buscar imagens..." />
              <select onChange={(e) => setExtension(e.target.value)} className="border px-4 py-2 rounded-lg text-White-900">
                <option value="">All formats</option>
                <option value="JPG">JPG</option>
                <option value="PNG">PNG</option>
                <option value="JPEG">JPEG</option>
                <option value="GIF">GIF</option>
              </select>
              <Button
  type="button"
  variant="danger"
  onClick={() => router.push('/upload')}
>
  Add New
</Button>
            </div>
        </section>

        <section>
          {
            renderImageCards()
          }
        </section>
          
      </Template>
   
  )
}