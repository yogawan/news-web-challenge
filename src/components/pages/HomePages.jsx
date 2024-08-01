import HeaderLayouts from "../layouts/HeaderLayouts";
import AboutLayout from "../layouts/AboutLayouts";
import FeatureLayout from "../layouts/FeatureLayouts";
import DownloadLayouts from "../layouts/DownloadLayouts";
import VideoLayouts from "../layouts/VideoLayouts";
import RencetBlogLayouts from "../layouts/RecentBlogLayouts";
import OverviewLayouts from "../layouts/OverviewLayouts";
import ContactLayouts from "../layouts/ContactLayouts";
import FooterLayouts from "../layouts/FooterLayouts";

const HomePages = () => {
    return (
        <div>
            <HeaderLayouts></HeaderLayouts>
            <AboutLayout></AboutLayout>
            <FeatureLayout></FeatureLayout>
            <OverviewLayouts></OverviewLayouts>
            <DownloadLayouts></DownloadLayouts>
            <VideoLayouts></VideoLayouts>
            <RencetBlogLayouts></RencetBlogLayouts>
            <ContactLayouts></ContactLayouts>
            <FooterLayouts></FooterLayouts>
        </div>
    );
};

export default HomePages;