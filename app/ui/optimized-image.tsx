/** Wrapper around ExportedImage to make development smoother */

import ExportedImage, {
  type ExportedImageProps,
} from 'next-image-export-optimizer';

export default function OptimizedImage(props: ExportedImageProps) {
  return (
    <ExportedImage
      {...props}
      // If in development, next-image-export-optimizer won't have run.
      // Set 'unoptimized=true' to silence the warnings about missing params.
      unoptimized={process.env.NODE_ENV === 'development'}
      sizes="auto"
    />
  );
}
