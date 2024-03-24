//import post from './post'
// ./schemas/index.ts
import {blockType} from './blockType'
import blockContent from './blockContent'

//import {callToActionType} from './callToActionType'
import {detailsType} from './detailsType'
import {cardType} from './cardType'
//import {formType} from './formType'
import {headingType} from './headingType'
//import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
import {navType} from './navType'
//import {textWithIllustrationType} from './textWithIllustrationType'
//import {videoType} from './videoType'

export const schemaTypes = [
  navType,
  pageType,
  headingType,
  //callToActionType,
  //textWithIllustrationType,
  //imageGalleryType,
  //formType,
  detailsType,
  cardType,
  //videoType,
  blockType,
  blockContent,
]

//export const schemaTypes = [post, blockContent]
