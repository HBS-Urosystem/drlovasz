//import post from './post'
// ./schemas/index.ts
import {blockType} from './blockType'
import blockContent from './blockContent'

//import {callToActionType} from './callToActionType'
import {formType} from './formType'
import {headingType} from './headingType'
//import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
//import {textWithIllustrationType} from './textWithIllustrationType'
//import {videoType} from './videoType'

export const schemaTypes = [
  pageType,
  headingType,
  //callToActionType,
  //textWithIllustrationType,
  //imageGalleryType,
  formType,
  //videoType,
  blockType,
  blockContent,
]

//export const schemaTypes = [post, blockContent]
