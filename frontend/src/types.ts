import { RefObject } from 'react'

export interface AnimationChild {
	key: number;
	id: number | string;
	ref: RefObject<any>
}

export type AnimationChildren = AnimationChild[]

export type DOMRectDict = {[id: number]: DOMRect}