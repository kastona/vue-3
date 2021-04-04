import {Moment} from 'moment'

export type Period = 'Today' | 'This Week' | 'This Month'
export type Friend = 'James' | 'Steve' | 'Andrew'

export interface Post {
    id: number,
    title: string,
    markdown: string,
    html: string,
    authorId: number,
    created: Moment

}