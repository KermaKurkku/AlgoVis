import { RefObject } from 'react'

export interface AnimationChild {
	
	ref: RefObject<any>
}

export type AnimationChildren = AnimationChild[]

export type DOMRectDict = {[id: number]: DOMRect}