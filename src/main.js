import './styles/style.css'

import LocoGsap from './moduls/LocoGsap'
import Slider from './moduls/Slider'
import Tabs from './moduls/Tabs'
import Sticky from './moduls/stickyBlock'
import Nav from './moduls/Nav'

const checkPages = () => 
{
    const scroll = new LocoGsap()
    const slider = new Slider()
    const tabs = new Tabs()
    const sticky = new Sticky()
    const nav = new Nav()
}
checkPages()
