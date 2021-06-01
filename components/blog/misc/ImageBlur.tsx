import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { imageBuilder } from 'lib/blog/sanity'
import clsx from 'clsx'

type ImageBlurProps = {
  width: number;
  height: number;
  layout: 'fixed' | 'intrinsic' | 'responsive';
  priority?: boolean;
  src: any;
  quality?: number;
  className?: string;
}

export const ImageBlur: FC<ImageBlurProps> = (props) => {
  const [blur, setBlur] = useState<boolean>(true)
  const highResImageConatiner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if ((highResImageConatiner.current?.firstChild?.firstChild as HTMLImageElement | undefined)?.complete) {
      setBlur(false)
    }
  }, [])

  return (
    <div className={clsx(
        'relative transition',
        blur ? 'filter blur-sm' : ''
      )}
      ref={highResImageConatiner}
    >
      {/* Preview Image */}
      {blur && <div className="absolute top-0 left-0">
        <Image
          src={imageBuilder(props.src)
            .width(Math.ceil(props.width / 4))
            .height(Math.ceil(props.height / 4))
            .url()}
          width={props.width}
          height={props.height}
          layout={props.layout}
          priority={props.priority}
          className={props.className}
          quality={1}
        />
      </div>}
      {/* High-res Image */}
      <Image
        src={imageBuilder(props.src)
          .width(props.width)
          .height(props.height)
          .url()}
        width={props.width}
        height={props.height}
        layout={props.layout}
        priority={props.priority}
        onLoad={(): void => setBlur(false)}
        quality={props.quality}
        className={props.className}
      />
    </div>
  )
}