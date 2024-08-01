import TopNavigationFragments from "../fragments/TopNavigationFragments";
import NavigationFragments from "../fragments/NavigationFragments";
import BottomNavigationFragments from "../fragments/BottomNavigationFragments";

const HeaderShowBlogLayouts = (props) => {
    return (
        <div className="header">
            <div className="container">
                <TopNavigationFragments></TopNavigationFragments>
                <NavigationFragments></NavigationFragments>
                <BottomNavigationFragments></BottomNavigationFragments>
                <h1 className="white text-algin-center">{props.text}</h1>
                <div className="breadcumb text-algin-center">
                    <img src="./" alt="img" />
                    <a href="#">Home</a>
                    /
                    <a href="#">Blog</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderShowBlogLayouts;