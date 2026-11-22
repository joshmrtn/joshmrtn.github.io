import { ExportedImageProps } from 'next-image-export-optimizer';
import OptimizedImage from '@/app/ui/optimized-image';

type FigureProps = ExportedImageProps & {
  caption?: string;
  figureClassName?: string;
  captionClassName?: string;
};

export function Figure({
  caption,
  className = '',
  figureClassName = '',
  captionClassName = '',
  ...props
}: FigureProps) {
  return (
    <figure className={`my-8 ${figureClassName}`.trim()}>
      <OptimizedImage
        sizes="(max-width: 768px) 100vw, 800px"
        {...props}
        className={`h-auto w-full rounded-lg ${className}`.trim()}
      />
      {caption && (
        <figcaption
          className={`mt2.5 text-center text-sm text-balance text-neutral-500 ${captionClassName}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
