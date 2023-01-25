import './styles/style.css'

import LocoGsap from './moduls/LocoGsap'
import Slider from './moduls/Slider'
import Tabs from './moduls/Tabs'
import Sticky from './moduls/stickyBlock'
import Text from './moduls/Text'
import Lines from './moduls/lines'
import Burger from './moduls/burger'

const checkPages = () => 
{
    const scroll = new LocoGsap()
    const slider = new Slider()
    const tabs = new Tabs()
    const sticky = new Sticky()
    const text = new Text()
    const lines = new Lines()
    const burger = new Burger()
}
checkPages()
