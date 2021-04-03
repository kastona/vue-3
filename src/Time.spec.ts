import {mount} from '@vue/test-utils'
import Time from './Time.vue'
describe('Time', ()=> {
    
    it('displays 3 a tags in a nav', () => {
        let wrapper = mount(Time)

        let navItems = wrapper.findAll('[data-test="navItem"]')

        expect(navItems).toHaveLength(3)
    })
})