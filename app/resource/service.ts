import { Image } from "./image";  

export class ImageService {
  enviar(file: File, imageName: string, tags: string[]) {
    throw new Error('Method not implemented.');
  }

  baseURL: string = 'http://localhost:8080/images';

  async buscar(query: string = '', extension?: string): Promise<Image[]> {
    const url = `${this.baseURL}?query=${query}&extension=${extension}`
    const response = await fetch(url);
    return  await response.json();


  }
  async enviar(file: File, name: string, tags: string[]): Promise<void> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', name);
  tags.forEach((tag) => formData.append('tags', tag));

  const response = await fetch(this.baseURL, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(
      `Falha ao enviar imagem: ${response.status} ${response.statusText}`,
    );
  }
}
}
  
export const useImageService = () => new ImageService();