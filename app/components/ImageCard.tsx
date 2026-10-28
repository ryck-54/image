interface ImageCardProps {
  imageUrl?: string;
  imageName?: string;
  imageSize?: string;
  uploadDate?: string;
  extension?: string;
} 

export  const ImageCard: React.FC<ImageCardProps> = ({imageName, imageUrl, imageSize, uploadDate, extension}) => {
  function downloadImage() {
    window.open(imageUrl,'_blank');
  }
  return(
    <div onClick={downloadImage} className="card relative bg-white rounded-md shadow-md transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-1"> 
        <img src={imageUrl} className="h-56 w-full object-cover rounded-t-md" alt="Thumbnail" />
        <div className="card-body p-4">
            <h1 className="text-xl font-semibold mb-2 text-gray-600">{imageName}</h1>
            <p className="text-xl font-semibold mb-2 text-gray-600">{uploadDate}</p>
            <p className="text-xl font-semibold mb-2 text-gray-600">{extension}</p> 
            <p className="text-xl font-semibold mb-2 text-gray-600">{formatBytes(Number(imageSize))}</p>
        </div>
    </div>
  )
}

function formatBytes(bytes: number = 0, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const absBytes = Math.abs(bytes);

    // Evita estourar o tamanho do array sizes
    const i = Math.min(
        Math.floor(Math.log(absBytes) / Math.log(k)),
        sizes.length - 1
    );

    const formattedValue = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedValue} ${sizes[i]}`;
}
// Exemplos de uso:
console.log(formatBytes(1024));       // "1 KB"
console.log(formatBytes(1234567, 3)); // "1.177 MB"
console.log(formatBytes(1099511627776)); // "1 TB"