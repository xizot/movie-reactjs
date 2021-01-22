import React, { useEffect, useState } from 'react';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import $ from "jquery";
function Header({ isDark = null }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const handleMenu = () => {
        setisOpen(!isOpen);
    };
    useEffect(() => {
        $(".c-menusp a").on("click",function(){
            setisOpen(false);
        })
        setIsLoading(true);
    }, [isLoading]);

    return (
        <>
            <Loading nameClass={isLoading ? 'is-fadeout' : ''} />
            <header className='c-header'>
                <div
                    className={
                        isDark
                            ? 'p-header js-header is-dark-2'
                            : 'p-header js-header '
                    }
                >
                    <div className='p-header__content u-flex u-a-center u-between'>
                        <Link to='/' className='p-header__logo'>
                            <img
                                src='https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png'
                                alt=''
                            />
                        </Link>
                        <ul className='p-header__cgnav u-flex'>
                            <li>
                                <Link to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link to='/movie'>MOVIES</Link>
                            </li>
                            <li>
                                <Link to='/tv'>TV SHOWS</Link>
                            </li>
                            <li>
                                <Link to='/tips'>ABOUT</Link>
                            </li>
                            {(user && user.role === "admin") &&  <li>
                                <Link to='/admin'>ADMIN PAGE</Link>
                            </li>}
                           
                        </ul>
                        <div className='p-header__actions u-flex u-a-center'>
                            <Link to='/' className='p-header__search'>
                                <SearchOutlined />
                            </Link>
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to='/login'
                                        className='p-header__account u-flex u-a-center '
                                    >
                                        <p>LOGOUT</p>
                                    </Link>
                                    <Link
                                        to='/account'
                                        className='p-header__account u-flex u-a-center '
                                    >
                                        <p>ACCOUNT</p>
                                        <div className='icon-circle'>
                                            <UserOutlined />
                                        </div>
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    to='/login'
                                    className='p-header__account u-flex u-a-center '
                                >
                                    <p>LOGIN</p>
                                    <div className='icon-circle'>
                                        <UserOutlined />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={`c-menusp ${isOpen ? 'is-open' : ''}`}>
                        <div
                            className='c-menusp__controller js-bars'
                            onClick={() => handleMenu()}
                        >
                            <span className='c-line c-line1'></span>
                            <span className='c-line c-line2'></span>
                        </div>
                        <div className='c-menusp__content'>
                            <div
                                className='c-menusp__blank js-blank'
                                onClick={() => handleMenu()}
                            ></div>
                            <div className='c-menusp__sidebar'>
                                <div className='c-menusp__search'>
                                    <SearchOutlined />
                                    <input
                                        type='text'
                                        placeholder='Films, Actors'
                                    />
                                </div>
                                <ul className='c-menusp__cgnav'>
                                    <li>
                                        <Link to='/'>HOME</Link>
                                    </li>
                                    <li>
                                        <Link to='/movie'>MOVIES</Link>
                                    </li>
                                    <li>
                                        <Link to='/tv'>TV SHOWS</Link>
                                    </li>
                                    <li>
                                        <Link to='/tips'>ABOUT</Link>
                                    </li>
                                        {(user && user.role === "admin") &&  <li>
                                        <Link to='/admin'>ADMIN PAGE</Link>
                                    </li>}
                                </ul>
                                <div className='c-menusp__actions'>
                                    {isAuthenticated ? (
                                        <>
                                            <Link
                                                to='/login'
                                                className='p-header__account u-flex u-a-center '
                                            >
                                                <p>LOGOUT</p>
                                            </Link>
                                            <Link
                                                to='/account'
                                                className='p-header__account u-flex u-a-center '
                                            >
                                                <p>ACCOUNT</p>
                                                <div className='icon-circle'>
                                                    <UserOutlined />
                                                </div>
                                            </Link>
                                        </>
                                    ) : (
                                        <Link
                                            to='/login'
                                            className='p-header__account u-flex u-a-center '
                                        >
                                            <p>LOGIN</p>
                                            <div className='icon-circle'>
                                                <UserOutlined />
                                            </div>
                                        </Link>
                                    )}
                                </div>
                                <div className='c-menusp__footer u-flex u-a-center'>
                                    <Link to='/'>
                                        <img
                                            src='./assets/img/icons/instagram@2x.png'
                                            alt=''
                                        />
                                    </Link>
                                    <Link to='/'>
                                        <img
                                            src='./assets/img/icons/instagram@2x.png'
                                            alt=''
                                        />
                                    </Link>
                                    <p>@hambuger </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
