import Header from '~/components/Layout/components/Header';
import Footer from '../components/Footer';
// import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="">
                {/* <SideBar /> */}
                <div className="">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
