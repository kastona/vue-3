import {Post} from './types'
import moment from 'moment'


export const basePost: Post = {
    id: 1,
    title: 'Base Post',
    markdown: 'some dummy markdown',
    html: '<h1>some dummy html</h1>',
    authorId: 1,
    created: moment()
}

export const todayPost: Post = {
    ...basePost,
    title: 'Get me home!',
}

export const thisWeekPost: Post = {
    ...basePost,
    title: 'This week post',
    created: moment().subtract(2, 'days')
}

export const thisMonthPost: Post = {
    ...basePost,
    title: 'This month post',
    created: moment().subtract(2, 'weeks')
}