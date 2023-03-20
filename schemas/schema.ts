import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Question
 *
 *
 */
export interface Question extends SanityDocument {
  _type: "question";

  /**
   * Title — `string`
   *
   * The main topic of the question
   */
  title?: string;

  /**
   * Details — `text`
   *
   * A detailed description of the question
   */
  details?: string;
}

/**
 * Answer
 *
 *
 */
export interface Answer extends SanityDocument {
  _type: "answer";

  /**
   * Question — `reference`
   *
   * Which question is this answer referring to
   */
  question?: SanityReference<Question>;

  /**
   * Title — `string`
   *
   * A short title that describes the answer's main topic
   */
  title?: string;

  /**
   * Text — `text`
   *
   * The actual answer text
   */
  text?: string;
}

export type Documents = Question | Answer;
