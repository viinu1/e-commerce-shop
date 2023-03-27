import { useEffect, useState } from 'react';
import Header from '~/components/Layout/components/Header';
import Footer from '../components/Footer';
// import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleSize);
        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    }, []);

    useEffect(() => {
        if (windowSize.width < 639) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowSize]);
    return (
        <div>
            <Header isMobile={isMobile} />
            <div className="">
                {/* <SideBar /> */}
                <div className="">{children}</div>
            </div>
            <Footer isMobile={isMobile} />
        </div>
    );
}

export default DefaultLayout;
