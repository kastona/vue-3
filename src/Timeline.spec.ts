import {mount} from '@vue/test-utils'
import Timeline from './Timeline.vue'

describe('Timeline', ()=> {
    it('renders 3 timeline periods', ()=> {
        const wrapper = mount(Timeline)

        const timelines = wrapper.findAll('[data-test="period"]')
        expect(timelines).toHaveLength(3)
    }),
    it('updates the period when nav clicked', async ()=> {
        const wrapper = mount(Timeline)
        const $today = wrapper.findAll('[data-test="period"]')[0]
        expect($today.classes()).toContain('is-active')

        const $thisWeek = wrapper.findAll('[data-test="period"]')[1]

        await $thisWeek.trigger('click')

        
        expect($today.classes()).not.toContain('is-active')
        expect($thisWeek.classes()).toContain('is-active')

        const $thisMonth = wrapper.findAll('[data-test="period"]')[2]

        await $thisMonth.trigger('click')

        expect($thisWeek.classes()).not.toContain('is-active')
        expect($thisMonth.classes()).toContain('is-active')
    })
})