import React, { useState } from 'react';
import logo from '../../../assets/logo.svg'
import imgHome from '../../../assets/home.svg';
import imgCall from '../../../assets/call.svg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import imgPerson from '../../../assets/person.svg';
import imgShoppingCart from '../../../assets/local_mall.svg';
import imgUsefulArticles from '../../../assets/emoji_objects.svg';
import imgLanguage from '../../../assets/language1.svg';
import imgProducts from '../../../assets/filter_frames.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from '../../../Pages/Products/ProductsPage.jsx';
import Contacts from '../../../Pages/Contacts/ContactsPage.jsx'; 
import HomePage from '../../../Pages/Home/HomePage.jsx'; 
import UsefulArticlesPage from '../../../Pages/UsefulArticles/UsefulArticlesPage.jsx';
import ProfilePage from '../../../Pages/Profile/ProfilePage.jsx';  
import ShoppingCartPage from '../../../Pages/ShoppingCart/ShoppingCartPage.jsx'; 
import s from './Header.module.css'; // стили

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <Router>
      <header className={s.header}>
        <div className='container'>
          <div className={s.box}>
            <div className={s.logo_image}>
              <Link to="/"><img src={logo} alt="image of logo Bal Tatym" className='logo-img' />
              </Link>
            </div>

            <ul
              className={
                header ? [s.menu, s.active].join(' ') : [s.menu]}>
              <div className={s.logo_div}>
                <img src={logo} alt="image of logo" className={s.logo_img_phone} />
              </div>
              <li>
                <Link to="/" className={s.link_home2}>
                  <img src={imgHome} className={s.img_home} alt="img of home" />
                  <p>Главная</p>
                </Link>
              </li>
              <li>
                <Link className={s.link_products} to='/products'>
                  <img src={imgProducts} className={s.img_home} alt="img of home" />
                  <p>Продукция</p>
                </Link>
              </li>
              <li>
                <Link className={s.link_useful_articles} to='/useful-articles'>
                  <img src={imgUsefulArticles} className={s.img_home} alt="img of home" />
                  <p>Полезные статьи</p>
                </Link>
              </li>
              <li>
                <Link to='/contacts' className={s.link_contacts}>
                  <img src={imgCall} className={s.img_home} alt="img of home" />
                  <p>Контакты</p>
                </Link>
              </li>
                {/* ----------------------------------------- это в декстоп версии */}
                
               <div className={s.div_wrapper}>
                <li><img src={imgLanguage} alt="icon of language" className={s.language} /></li>
                <li className={s.li_cart}>
              <Link to='/shopping-cart' className={s.link_cart_image}>
                  <img src={imgShoppingCart} alt="img of home" />
                </Link>
                <Link to='/shopping-cart' className={s.link_cart_text}>
                  <p>Корзина</p>
                </Link>
              </li> 
              <li className={s.li_profile}>
              <Link to='/profile-page' className={s.link_profile_img}>
                  <img src={imgPerson} alt="img of home" />
                </Link>
                <Link to='/profile-page' className={s.link_profile_text}>
                  <p>Профиль</p>
                </Link>
              </li>
              </div>
              {/* ----------------------------------------- */}
              {/* это версия в телефоне */}
              <li>
                <Link className={s.link_cart_phone} to='/shopping-cart'>
                  <img src={imgShoppingCart} className={s.img_home} alt="img of home" />
                  <p>Корзина</p>
                </Link>
              </li>
              <li>
                <Link to='/profile-page' className={s.link_cart_phone}>
                  <img src={imgPerson} className={s.img_home} alt="img of home" />
                  <p>Профиль</p>
                </Link>
              </li>
            </ul>
            <div onClick={() => setHeader(!header)} className={s.mobile_btn}>
              {header ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
              {/*  AiOutlineClose это иконка закрыть, AiOutlineMenu а это иконка бургер меню */}
            </div>
          </div>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/useful-articles">
          <UsefulArticlesPage />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/profile-page">
          <ProfilePage />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header