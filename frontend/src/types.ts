import { RefObject } from 'react'

export interface AnimationChild {
	key: number | string;
	id: number | string;
	ref: RefObject<any>
}

export type AnimationChildren = AnimationChild[]