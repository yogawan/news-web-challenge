const FooterLayouts = () => {
    return (
        <footer>
            <div className="container">
                <ul>
                    <h2 className="white">LOGO</h2>
                    <p className="semi-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                    <div className="social">
                        <a className="semi-white" href="#"><img src="./top-fb.png" alt="img" /></a><hr />
                        <a className="semi-white" href="#"><img src="./top-ig.png" alt="img" /></a><hr />
                        <a className="semi-white" href="#"><img src="./top-x.png" alt="img" /></a><hr />
                        <a className="semi-white" href="#"><img src="./top-yt.png" alt="img" /></a><hr />
                    </div>
                </ul>
                <ul>
                    <h2 className="white">QUICK LINK</h2>
                    <li><a className="semi-white" href="#">About</a></li>
                    <li><a className="semi-white" href="#">Features</a></li>
                    <li><a className="semi-white" href="#">Screenshot</a></li>
                    <li><a className="semi-white" href="#">Blog</a></li>
                </ul>
                <ul>
                    <h2 className="white">NEWS LETTER</h2>
                    <p className="semi-white">Subscribe our newsletter to get our latest update & news</p>
                    <div className="form">
                        <input type="text" placeholder="Input your email here..."/>
                        <img src="./send.png" alt="" />
                    </div>
                </ul>
            </div>
            <hr />
            <div className="bottom">
                <img src="./cr.png" alt="img" />
                <p>Copyright 2021 .Ojjomedia. All Right Reserved.</p>
            </div>

        </footer>

    )
}

export default FooterLayouts;