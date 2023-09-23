"use client"
import Image from 'next/image'
import styles from '../src/app/page.module.css'
import { Container } from 'react-bootstrap';
import logo from "../public/logo-ar.svg"
import Link from 'next/link';
function navbar() {
  return (
    <>
    <div className={styles.nav_back}>
    <Container dir='rtl' style={{maxWidth:'1440px'}}>
        <div className={styles.nav_main}>
        <section>
        <i class="fa-regular fa-face-smile"></i>
         <p> توصيل مجاني لمشتريات 300 ريال وأكثر داخل المملكة العربية السعودية</p>
        </section>
            <p>
            عربي
            </p>
        </div>
    </Container>
    </div>
{/*  */}
<div className={styles.nav_back2}>
    <Container dir='rtl' style={{maxWidth:'1440px'}}>
        <div className={styles.nav_bar}>
            <Image src={logo} alt=" "></Image>
            <div className={styles.searchBox}>

<input  type="text" name="" placeholder="ما الذي تبحث عنه" className={styles.searchInput}/>
<button  href="#"  className={styles.searchButton}>
<i class="fa-solid fa-magnifying-glass"></i>
</button>
</div>


<div className={styles.nav_left}>
    <section>
    <i class="fa-regular fa-user"></i> 

<Link href="" >
دخول
</Link>
/ 
<Link href="" >
تسجيل جديد
</Link>
    </section>

<div className={styles.nav_left_shop}>
<i class="fa-solid fa-cart-shopping"></i>
<span>0</span>
</div>
</div>
        </div>
    </Container>
    </div>

{/*  */}
<div className={styles.nav_back3}>
    <Container dir='rtl' style={{maxWidth:'1440px'}}>
        <div className={styles.mega_menu_nav}>
            <section >
<div class="ruby-menu-demo-header">
      <div class="ruby-wrapper">
        <button class="c-hamburger c-hamburger--htx visible-xs">
          <span>toggle menu</span>
        </button>
        <ul class="ruby-menu">
          <li><a href="#" class="ru_enu">
            <i class="fa-solid fa-bars"></i>
            <span>جميع الأقسام</span>
          </a>
            <ul class="">
              <li><a href="#">2nd Level #1</a></li>
              <li><a href="#">2nd Level #2</a></li>
              <li><a href="#">2nd Level #3</a>
                <ul>
                  <li><a href="#"><i class="fa fa-university" aria-hidden="true"></i>3rd Level #1</a>
                    <ul>
                      <li><a href="#">4th Level #1</a></li>
                      <li><a href="#">4th Level #2</a></li>
                    </ul>
                  <span class="ruby-dropdown-toggle"></span></li>
                  <li><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i>3rd Level #2</a></li>
                  <li><a href="#"><i class="fa fa-users" aria-hidden="true"></i>3rd Level #3</a>
                    <ul>
                      <li><a href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i>4th Level #1</a></li>
                      <li><a href="#"><i class="fa fa-print" aria-hidden="true"></i>4th Level #2</a></li>
                      <li><a href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i>4th Level #3</a></li>
                    </ul>
                  <span class="ruby-dropdown-toggle"></span></li>
                </ul>
              <span class="ruby-dropdown-toggle"></span></li>
              <li class="ruby-open-to-left"><a href="#">2nd Level #4</a>
                <ul>
                  <li><a href="#">3rd Level #1</a></li>
                  <li><a href="#">3rd Level #2</a></li>
                  <li><a href="#">3rd Level #3</a></li>
                </ul>
              <span class="ruby-dropdown-toggle"></span></li>
              <li><a href="#">2nd Level #5</a></li>
            </ul>
          <span class="ruby-dropdown-toggle"></span></li>

        </ul>
      </div>

    </div>

                <h6>وصل حديثاً</h6>
                <h6>تسوق حسب الماركة</h6>
                <h6>عروض حصرية اونلاين</h6>
                <h6>فروعنا</h6>
                <h6>هل تحتاج مساعدة؟</h6>
                <h6></h6>
            </section>
            <div className={styles.n}>
            <i class="fas fa-phone"></i>
                <p>
للدعم والتواصل  

<span>   8004420000   </span>
</p>
            </div>
        </div>
    </Container>
    </div>

    </>
    
        
  )
}
export default  navbar;