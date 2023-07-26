import React from 'react';
import './Content.css';
import { FaBars } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import { BsHouseDoorFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrSnapchat } from 'react-icons/gr';
import { GiCutDiamond } from 'react-icons/gi';
import { FaRocket } from 'react-icons/fa';
import { BsFillSendFill } from "react-icons/bs";
import { GiNetworkBars } from 'react-icons/gi';
import { VscSearch } from 'react-icons/vsc';




const Content = () => {

    return (
        <div className="container">
            <div>
                <input type='checkbox' id="openSidebar" className="sidebarIconToggle" />
                <label htmlFor="openSidebar" id="bar"><FaBars className="label" /></label>
                <div className="sidebarMenu">
                    <section>
                        <form className="form">
                            <div>
                                <input placeholder="Search" type='text' className="Search_input" />
                                <span><VscSearch className="input_icon" /></span></div>
                        </form>
                    </section>
                    <nav className="navbar">
                        <h1 className="navbar_h1_menu">Menu</h1>
                        <ul className="navbar_ul">
                            <li className="nav_ul_li_homepage">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">HOMEPAGE</a>
                            </li>
                            <li className="nav_ul_li_generic">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">GENERIC</a>
                            </li>
                            <li className="nav_ul_li_element">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">ELEMENT</a>
                            </li>
                            <li className="nav_ul_li_submenu">
                                <a className="nav_ul_li_a">
                                    <select className="nav_ul_li_submenu_select">
                                        <option>SUBMENU</option>
                                        <option>SMALLMENU</option>
                                        <option>DESIGNMENU</option>
                                        <option>AVERAGEMENU</option>
                                    </select>
                                </a>
                            </li>
                            <li className="nav_ul_li_etiamdolore">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">ETIAM DOLORE</a>
                            </li>
                            <li className="nav_ul_li_adipiscing">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">ADIPISCING</a>
                            </li>
                            <li className="nav_ul_li_anothersubmenu">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">
                                    <select className="nav_ul_li_another_submenu_select">
                                        <option>ANOTHERSUBMENU</option>
                                        <option>BESTMENU</option>
                                        <option>LOWBUDGETMENU</option>
                                        <option>HIGHBUGETMENU</option>
                                    </select>
                                </a>
                            </li>
                            <li className="nav_ul_li_maximus_erat">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">MAXIMUS ERAT</a>
                            </li>
                            <li className="nav_ul_li_sapien_mauris">
                                <a className="nav_ul_li_a" href="http://localhost:3000/">SAPIEN MAURIS</a>
                            </li>
                        </ul>
                    </nav>
                    <section className="section_header_AnteInterdum">
                        <header className="section_header_AnteInterdum_header"><b>Ante interdum</b></header>
                        <article>
                            <img src="/image/dog.jpg.jpg" className="sidebar_image" />
                            <p className="section_header_AnteInterdum_paragraph">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <img src="/image/mountain.jpg.jpg" className="sidebar_image" />
                            <p className="section_header_AnteInterdum_paragraph">Aenean ornare velit lacus,ac varius enim lorem ullamcorper dolore aliquam.</p>
                        </article>
                        <article>
                            <img src="/image/gadget.jpg" className="sidebar_image" />
                            <p className="section_header_AnteInterdum_third_paragraph">Aenean ornare velit lacus,ac varius enim lorem ullamcorper dolore aliquam.</p>
                            <ul className="AnteInterdum_morelink">
                                <li><a href="https://www.youtube.com/" className="More_link">MORE</a></li>
                            </ul>
                        </article>
                    </section>
                    <section >
                        <header className="sidebar_getintouch_heading"><b>Get in touch</b></header>
                        <p className="sidebar_getintouch_paragraph">Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.Proin sed aliquam facilisis ante interdum, Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="address">
                            <li className="email"><a href="#" className="email_anchor_tag"><HiMail className='mail_icon' />information@gmail.com</a></li>
                            <li className="email"><a href="#" className="email_anchor_tag"><FaPhone className="mail_icon" />(000) 000-0000</a></li>
                            <li className="house_address"><a href="#" className="email_anchor_tag"><BsHouseDoorFill className="mail_icon" />1234 somewhere Road #8134 nashville, TN 00000-0000</a></li>
                        </ul>
                    </section>
                    <footer className="sidebar_footer">
                        @Untitled.All rights reserved.Demo image:
                    </footer>
                </div>
            </div>

            {/* main content */}

            <div className="main_content_container">
                <div className="Div_child">
                    <header className="main_content_header"><b>Editorial</b><span className='main_content_header_second'> by HTML5 UP</span>
                        <a href="https://mail.google.com/"><SiGmail className="socialmedia_icons" /></a>
                        <a href="https://www.facebook.com/"><FaFacebookF className="socialmedia_icons" /></a>
                        <a href="https://www.snapchat.com/"><GrSnapchat className="socialmedia_icons" /></a>
                        <a href="https://twitter.com/"><AiOutlineTwitter className="socialmedia_icons" /></a>
                        <a href='https://www.instagram.com/'><AiOutlineInstagram className="socialmedia_icons" /></a></header>
                    <section className="main_content_first_section">

                        <a href="#"><img src="/image/holi.jpg" alt="image" className="main_content_First_image" /></a>
                        <article>
                            <h1 className="main_first_section">Hi, I'm Editorial by HTML5 UP</h1>
                            <p className="main_first_section_paragraph">A FREE AND FULLY RESPONSIVE SITE TEMPLATE</p>
                            <p className="main_first_section_paragraph_second">Aenean ornare velit lacus,ac varius enim ullamcorper eu. Proin aliquam faclisis ante interdum congue.integer mollis,nisi amet convallis,porttitor magna ullamcorper,amet egestas mauris.Ut magna finibus nisi nex lacinia, Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                        </article>
                        <ul className="ul_learn_More">
                            <li>
                                <a href="https://www.youtube.com/" className="Learn_More_link">LEARN MORE</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <header className="header_Eratlacinia"><h2>Erat lacinia </h2></header>
                        <div className="section_container">
                            <article className="section_div">
                                <span className="span_icon">
                                    <GiCutDiamond className="icon" />
                                </span>
                                <div className="section_article_div">
                                    <h3>Portitor ullamcorper</h3>
                                    <p className="article_paragraph">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                </div>
                            </article>
                            <article className="section_div">
                                <span className="span_icon">
                                    <BsFillSendFill className="icon" />
                                </span>
                                <div className="section_article_div">
                                    <h3>Sapien Veroeares </h3>
                                    <p className="article_paragraph">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                </div>
                            </article>

                            <article className="section_div">
                                <span className="span_icon">
                                    <FaRocket className="icon" />
                                </span>
                                <div className="section_article_div">
                                    <h3>Portitor ullamcorper</h3>
                                    <p className="article_paragraph">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                </div>
                            </article>

                            <article className="section_div">
                                <span className="span_icon">
                                    <GiNetworkBars className="icon" />
                                </span>
                                <div className="section_article_div">
                                    <h3>Portitor ullamcorper</h3>
                                    <p className="article_paragraph">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section >
                        <header className="header_Eratlacinia"><h3>Ipsum sed dolor</h3></header>
                        <div className="section_container_second">
                            <article className="section_div_second">
                                <a href="#">
                                    <img className="anchor_image" src="/image/girls.jpg" alt="image" />
                                </a>
                                <h3 className="section_article_div_second">interdum aenean</h3>
                                <p className="article_paragraph_second">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                <ul className="main_content_morelink">
                                    <li><a href='https://www.youtube.com/' className="More_link">MORE</a></li>
                                </ul>
                            </article>

                            <article className="section_div_second">
                                <a href="#">
                                    <img className="anchor_image" src="/image/laptop.jpg" alt="image" />
                                </a>
                                <h3 className="section_article_div_second">Nulla amet dolore</h3>
                                <p className="article_paragraph_second">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                <ul className="main_content_morelink">
                                    <li><a href="https://www.youtube.com/" className="More_link">MORE</a></li>
                                </ul>
                            </article>

                            <article className="section_div_second">
                                <a href="#">
                                    <img className="anchor_image" src="/image/dost.jpg" alt="image" />
                                </a>
                                <h3 className="section_article_div_second">Tempus ullamcorper</h3>
                                <p className="article_paragraph_second">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                <ul className="main_content_morelink">
                                    <li><a href="https://www.youtube.com/" className="More_link">MORE</a></li>
                                </ul>
                            </article>

                            <article className="section_div_second">
                                <a href="#">
                                    <img className="anchor_image" src="/image/men.jpg" alt="image" />
                                </a>
                                <h3 className="section_article_div_second">Sed etiam facilis</h3>
                                <p className="article_paragraph_second">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                <ul className="main_content_morelink">
                                    <li><a href="https://www.youtube.com/" className="More_link">MORE</a></li>
                                </ul>
                            </article>

                            <article className="section_div_second">
                                <a href="#">
                                    <img className="anchor_image" src="/image/gadget.jpg" alt="image" />
                                </a>
                                <h3 className="section_article_div_second">Feugiat lorem aenean</h3>
                                <p className="article_paragraph_second">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                <ul className="main_content_morelink">
                                    <li><a href="https://www.youtube.com/" className="More_link">MORE</a></li>
                                </ul>
                            </article>

                            <article className="section_div_second">
                                <a href="#">
                                    <img className="anchor_image" src="/image/luci.jpg" alt="image" />
                                </a>
                                <h3 className="section_article_div_second">Amet varius aliquam</h3>
                                <p className="article_paragraph_second">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam faclisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                <ul className="main_content_morelink">
                                    <li><a href="https://www.youtube.com/" className="More_link">MORE</a></li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Content;