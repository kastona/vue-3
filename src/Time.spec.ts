import {mount} from '@vue/test-utils'
import Time from './Time.vue'
describe('Time', ()=> {
    
    it('displays 3 a tags in a nav', async () => {
        let wrapper = mount(Time)

        let navItems = wrapper.findAll('[data-test="navItem"]')

        let firstNav = navItems[0]
        let secondNav = navItems[1]
        let thirdNav = navItems[2]


        expect(firstNav.classes()).toContain('is-active')


        await secondNav.trigger('click')

        expect(firstNav.classes()).not.toContain('is-active')
        expect(secondNav.classes()).toContain('is-active')
    })
})