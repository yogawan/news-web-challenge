import TopNavigationFragments from "../fragments/TopNavigationFragments";
import NavigationFragments from "../fragments/NavigationFragments";
import BottomNavigationFragments from "../fragments/BottomNavigationFragments";
import HeroFragments from "../fragments/HeroFragments";

const HeaderLayouts = () => {
    return (
        <div className="header">
            <div className="container">
                <TopNavigationFragments></TopNavigationFragments>
                <NavigationFragments></NavigationFragments>
                <BottomNavigationFragments></BottomNavigationFragments>
                <HeroFragments></HeroFragments>
            </div>
        </div>
    )
}

export default HeaderLayouts;