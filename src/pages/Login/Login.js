import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '~/Redux/KageyamaSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    }),
                );
                setTimeout(() => {
                    navigate('/');
                }, 1500);
                // console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                toast.success('Log out success');
            })
            .catch((error) => {
                // An error happened.
            });
    };
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            <div className="w-full flex items-center justify-center gap-10">
                <div
                    onClick={handleGoogleLogin}
                    className="text-base w-60 h-12 flex items-center justify-center gap-2 tracking-wide border-[1px] border-gray-400 rounded-md hover:border-blue-600 cursor-pointer duration-300"
                >
                    <FaGoogle className="w-8" />
                    <span className="text-gray-900 text-sm">Login with google</span>
                </div>
                <button
                    onClick={handleSignOut}
                    className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 cursor-pointer"
                >
                    Sign out
                </button>
            </div>
            <div className="w-full flex items-center justify-center gap-10">
                <div className="text-base w-60 h-12 flex items-center justify-center gap-2 tracking-wide border-[1px] border-gray-400 rounded-md hover:border-blue-600 cursor-pointer duration-300">
                    <FaFacebook className="w-8" />
                    <span className="text-gray-900 text-sm">Login with Facebook</span>
                </div>
                <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 cursor-pointer">
                    Sign out
                </button>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className="text-base"
            />
        </div>
    );
}
