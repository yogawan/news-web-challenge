const TopNavigationFragments = () => {
    return (
        <div className="top-nav">
            <div className="left">
                <a className="white" href="#">
                   <img src="./top-mail.png" alt="" />
                   yogawan@gmail.com
                </a>
                <a className="white" href="#">
                   <img src="./top-phone.png" alt="" />
                   +62 85161766979
                </a>
            </div>
            <div className="right">
                <a href="#">
                    <img src="./top-fb.png" alt="img" />
                </a>
                <a href="#">
                    <img src="./top-ig.png" alt="img" />
                </a>
                <a href="#">
                    <img src="./top-x.png" alt="img" />
                </a>
                <a href="#">
                    <img src="./top-yt.png" alt="img" />
                </a>
            </div>
        </div>
    );
};

export default TopNavigationFragments;