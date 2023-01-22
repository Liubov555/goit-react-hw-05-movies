import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "components/AppBar/AppBar"
import Loading from "components/Loading/Loading";


const MenuLayout = () => {
    return (
        <>
            <AppBar />
            <main>
                <Suspense fallback={<Loading />} >
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default MenuLayout;