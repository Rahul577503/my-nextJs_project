import { IImage } from '@/interfaces/common'

export default function Image({ src, alt, height, width }: IImage) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || 'img'}
      width={width || '100%'}
      height={height || ''}
      style={{ padding: '4px', border: '0px solid #ccc', borderRadius: '5px' }}
    />
  )
}
