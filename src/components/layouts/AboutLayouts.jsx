const AboutLayout = () => {
    return (
        <div className="about" id="about">
            <h2 className="black">ABOUT OUR APP</h2>
            <p className="semi-black">UTY Creative Hub adalah aplikasi inovatif yang memungkinkan mahasiswa Universitas Teknologi Yogyakarta untuk membooking ruangan di gedung UTY Creative Hub secara gratis. Kini, Anda dapat dengan mudah menemukan dan memesan ruangan sesuai kebutuhan Anda dengan aplikasi yang tersedia di Google Playstore.</p>
            <div className="container">
                <div className="left">
                    <img src="./third-phone.png" alt="img" />
                </div>
                <div className="right">
                    <div className="content">
                        <img src="./check.png" alt="" />
                        <div className="list">
                            <h3 className="black">CREATIVE DESIGN</h3>
                            <p className="semi-black">Tampilan yang inovatif dan menarik, dirancang untuk menginspirasi dan mendukung kreativitas Anda setiap kali menggunakan aplikasi.</p>
                        </div>
                    </div>
                    <div className="content">
                        <img src="./check.png" alt="" />
                        <div className="list">
                            <h3 className="black">ESAY TO USE</h3>
                            <p className="semi-black">Antarmuka yang intuitif dan sederhana, memungkinkan Anda untuk membooking ruangan dengan cepat dan tanpa kesulitan.</p>
                        </div>
                    </div>
                    <div className="content">
                        <img src="./check.png" alt="" />
                        <div className="list">
                            <h3 className="black">BEST USER EXPERIENCE</h3>
                            <p className="semi-black">Pengalaman pengguna yang optimal dengan navigasi yang mudah dan fitur-fitur yang memudahkan penggunaan aplikasi bagi semua kalangan mahasiswa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutLayout;