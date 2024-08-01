const FeatureLayout = () => {
    return (
        <div className="feature" id="feature">
            <h2 className="white">APP FEATURE</h2>
            <p className="semi-white">Temukan fitur-fitur utama dari aplikasi UTY Creative Hub yang membuat pembookingan ruangan menjadi lebih mudah dan efisien bagi mahasiswa Universitas Teknologi Yogyakarta. Aplikasi kami dirancang dengan kenyamanan Anda sebagai prioritas, menawarkan pengalaman yang mulus dan ramah pengguna. Berikut adalah fitur-fitur aplikasi kami.</p>
            <div className="container">
                <div className="right">
                    <div className="content">
                        <div className="img">
                            <img src="./f-browser.png" alt="User Friendly" />
                        </div>
                        <h3 className="white">USER-FRIENDLY</h3>
                        <p className="semi-white">Pengalaman pengguna yang optimal dengan navigasi yang mudah dan fitur-fitur yang memudahkan penggunaan aplikasi bagi semua mahasiswa.</p>
                    </div>
                    <div className="content">
                        <div className="img">
                            <img src="./f-ds.png" alt="QR Scan & Magnetic Door Integration" />
                        </div>
                        <h3 className="white">QR SCAN & MAGNETIC DOOR INTEGRATION</h3>
                        <p className="semi-white">Akses ruangan dengan aman dan efisien melalui integrasi pemindaian kode QR dan kunci pintu magnetik.</p>
                    </div>
                </div>
                <div className="center">
                    <img src="./second-phone.png" alt="App Display" />
                </div>
                <div className="left">
                    <div className="content">
                        <div className="img">
                            <img src="./f-phone.png" alt="Location Based Service" />
                        </div>
                        <h3 className="white">LOCATION BASED SERVICE (LBS)</h3>
                        <p className="semi-white">Temukan dan akses ruangan dengan mudah menggunakan layanan berbasis lokasi yang terintegrasi dalam aplikasi.</p>
                    </div>
                    <div className="content">
                        <div className="img">
                            <img src="./f-eye.png" alt="Biometric & PIN Security" />
                        </div>
                        <h3 className="white">BIOMETRIC & PIN SECURITY</h3>
                        <p className="semi-white">Keamanan tambahan dengan autentikasi biometrik dan PIN untuk melindungi akses ke akun Anda dan memastikan hanya Anda yang dapat membooking dan mengakses ruangan.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureLayout;
