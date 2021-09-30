import {
  faDoorOpen,
  faEnvelope,
  faNewspaper,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import styles from "../css/BoshSahifa.module.css";
import { Button, Container, Nav,Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import sty from "./sty.module.css";
import gerb from "../img/pngegg.png";
import rasm41 from "../img/1.jpg";
import rasm42 from "../img/2.jpg";
import rasm43 from "../img/3.jpg";
import rasm44 from "../img/4.jpg";
import rasm45 from "../img/5.jpg";
import rasm46 from "../img/6.jpg";
import flagUZ from "../img/flagUZ.png";
import flagRU from "../img/flagRU.png";
import bg1t from "../img/bg1t.jpg";
import bg2t from "../img/bg2t.jpg";
import bg3t from "../img/bg3t.jpg";
import { getEvents } from "../host/Config";
import {BiTime} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import "../App.css";
import { Tooltip, Carousel } from "antd";
import { Link, NavLink } from "react-router-dom";
import BoshSahifaDavomi from "./BoshSahifaDavomi";
import MaktabTadbirlari from "./MaktabTadbirlari";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BiCalendar} from 'react-icons/bi';

import maktab from "../img/1 g.jpg";
import { getNews } from "../host/Config";
import { url, user } from "../host/Host";
import axios from "axios";
// import Clock from 'react-live-clock';
import headerT from "../img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import YouTube from "react-youtube";
import Global from "../host/Global";
import { Clock } from "./Clock";
import ScaleLoader from 'react-spinners/ScaleLoader';
import {FaRegCalendarAlt} from 'react-icons/fa'
import school1 from '../img/school1.jpg'
import Slider from "react-slick";
import school from "../img/gerb.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import { Form, Input } from 'antd';
import { YMaps, Map ,Clusterer, Placemark, 
    TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl} from 'react-yandex-maps';

    const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default class BoshSahifa extends Component {
  state = {
    loader: true,
    news: [],
    id: 0,
    school: null,
    clock: "00 : 00 : 00",
    events: [],
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${Global.user}`).then((res) => {
      this.setState({
        school: res.data,
      });
      setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 2000);
    });
  };
  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          this.setState({
            news: res.data,
            id: v,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getEvents = () => {
    getEvents()
      .then((res) => {
        console.log(res.data);
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            events: res.data,
          });
        } else {
          this.setState({
            events: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getNews();
    this.getSchool();
    window.addEventListener("load", () => {
      this.setState({
        loader: false,
      });
    });
    setInterval(() => {
      this.setState({ clock: Clock() });
    }, 1000);
    this.getEvents();
  }
  render() {
    const props = {
      dots: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settings = {
      autoplay:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
    }
    return (
      <div>
      {this.state.loader ? (
        <div className={styles.loader}>
          <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
        </div>
      ) : (
          <div style={{overflow:'hidden',zIndex:'1'}}>
              <Navbar/>
              <div className={styles.header}>
                 
              </div>
              <div className={styles.video}>
               <Container>
                   <Row>
                       <Col lg={6} >
                           <h2>Maktabga video sayohat</h2>
                           <YouTube
                    videoId={
                      this.state.school !== null
                        ? this.state.school.video !== null
                          ? this.state.school.video.slice(
                              this.state.school.video.indexOf("youtu.be/") + 9
                            )
                          : ""
                        : ""
                    }
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 0,
                      },
                    }}
                    className={styles.video1}
                  />
                       </Col>
                       <Col xs={12} sm={12} md={6} lg={6}>
                       <h2>So'nggi yangiliklar</h2>
                <div className={styles.four} style={{textAlign:'left',paddingTop:'70px'}}>
                        {this.state.news.map((item, key) => {
                          return key < 5 ? (
                            <div className={styles.new}>
                                     <div className={styles.new_img}><img src={item.image}/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}> {item.published_time.substring(0, 10)}</span></div>
                                             <p>{item.title}</p>
                                         </div>
                                     </div>
                                 </div>
                          ) : (
                            ""
                          );
                        })}
                  
                

                  <Link to={`/yangiliklar/`}>
                    <button className={styles.buttoncha}>
                      <span>Barchasini o'qish</span>
                    </button>
                  </Link>
                  </div>
                </Col>
                   </Row>
               </Container>
              </div>
             <div className={styles.tadbirlar}>
                 <h2>So'nngi tadbirlar</h2>
                 <Container style={{padding:'0'}}>
                     <Row>
                     {this.state.events.map((item, key) => {
              return key < 3 ? (  
                
                <Col lg={4} md={6} sm={12} style={{padding:'0'}} className={styles.tadbirCard}>
                         
                <div style={{height:'250px'}}>
                    <img src={item.image}  style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                </div>
                <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                <h4 style={{marginTop:'20px'}}>{item.title}</h4>
                    <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>{item.date}</span><br></br>
                    <BiTime style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>{item.time}</span><br></br>
                    <HiLocationMarker style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>{item.address}</span> 
                 </div>
            
                   </Col>
              ) : (
                ""
              );
            })}
                     </Row>
                 </Container>
             </div>
             <div className={styles.hamkorlar}>
                 <h2>Bizning hamkorlar</h2>
             <Slider {...settings} style={{padding:'20px'}}>
             <div className={styles.hamkor}>
              <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                <a href="https://president.uz/oz" target="_blank">
                  <img src={school} style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/>
                </a>
              </div>
              <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
            </div>
            <div className={styles.hamkor}>
              <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                <a href="https://www.gov.uz/uz" target="_blank">
                  <img src={her2} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                </a>
              </div>
              <p>O'zbekiston Respublikasining Hukumat portali</p>
            </div>
            <div className={styles.hamkor}>
              <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                <a href="https://lex.uz/" target="_blank">
                  <img src={her3} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                </a>
              </div>
              <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
            </div>
            <div className={styles.hamkor} >
              <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                <a href="https://my.gov.uz/oz" target="_blank">
                  <img src={her4} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                </a>
              </div>
              <p>Interaktiv davlat xizmatlarining Yagona portali</p>
            </div>
            <div className={styles.hamkor}>
              <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                <a href="https://www.uzedu.uz/" target="_blank">
                  <img src={her5} style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/>
                </a>
              </div>
              <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
            </div>
            <div className={styles.hamkor}>
              <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                <a href="https://ittower.uz/" target="_blank">
                  <img src={her6} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                </a>
              </div>
              <p>IT Tower firmasi </p>
            </div>
            </Slider>
             </div>
             <div className={styles.kontakt}>
                 <Container className={styles.contact} style={{backgroundColor:'white',padding:'0',marginTop:'60px',marginBottom:'30px'}}>
                     <Row>
                         <Col lg={6}>
                         <YMaps>
  <div style={{width:'100%',height:'100%',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
   
    <Map width='100%' height='100%' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </div>
</YMaps>
                         </Col>
                         <Col lg={6} className={styles.form}>
                             <h2>Biz bilan bog'laning</h2>
                             <div className={styles.address}>
                                 <div style={{paddingRight:'20px'}}>
                                     <h5>Manzil:</h5>
                                     <p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>Yakkasaroy tumani</p>
                                 </div>
                                 <div style={{paddingRight:'20px'}}>
                                  <h5>E-mail:</h5>
                                     <p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>jbvhqbvbyuwebv@gmail.com</p>
                                 </div>
                              <div style={{paddingRight:'10px'}}>
                                  <h5>Telefon:</h5>
                                  <p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>+823721365175</p>
                              </div>

                             </div>
                             <Form className={styles.formInput}  style={{width:'100%',marginLeft:'0px'}} {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="F.I.O ni kiriting" style={{padding:'5px',width:'90%',border:'1px solid #1EB2A6',marginBottom:'5px',outline:'none',fontSize:'14px'}}/>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="E-mail kiriting" style={{padding:'5px',width:'90%',border:'1px solid #1EB2A6',marginBottom:'5px',outline:'none',fontSize:'14px'}}/>
      </Form.Item>
      <Form.Item name="text">
      <TextArea
      placeholder="Savollar yoki takliflar"
      style={{padding:'5px',width:'90%',border:'1px solid #1EB2A6',marginBottom:'5px',outline:'none',fontSize:'14px'}}
        autoSize={{ minRows: 5, maxRows: 5 }}
      />
    </Form.Item>
      <Form.Item {...tailLayout}>
        <Button className={styles.btnForm} htmlType="submit" style={{backgroundColor:'#1EB2A6',color:'white',fontWeight:'700',width:'100px',border:'none'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    <div style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
        <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Telegram</span>
        <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Youtube</span>
        <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Facebook</span>
        <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Instagram</span>

    </div>

                         </Col>
                     </Row>
                 </Container>
             </div>
             <Footer/>
          </div>
             )}
             </div>


















      // <div>
      //   {this.state.loader ? (
      //     <div className="loader">
      //       <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
      //     </div>
      //   ) : (

          
      //     <div sryle={{backgroundColor:'white'}}>
      //       <Navbar/>

      //       <div className={style.header}>
      //       <Carousel
      //               autoplay
      //               effect="fade"
      //               style={{ zIndex: "-234" ,width:'100%',height:'100vh'}}
      //               {...props}
      //             >
      //               <div className="carg_img">
      //                 <img src={bg1t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      //               </div>
      //               <div className="carg_img">
      //                 <img
      //                   src={
      //                     maktab
      //                     //  this.state.school !== null
      //                     //    ? this.state.school.b_r1 !== null
      //                     //      ? this.state.school.b_r1
      //                     //      : headerT
      //                     //    : headerT
      //                   }
      //                   style={{width:'100%',height:'100%',objectFit:'cover'}}
      //                 />
      //               </div>
      //               <div className="carg_img">
      //                 <img src={bg2t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      //               </div>
      //             </Carousel>
      //         <div className="yozuvT">
      //           <h4>XUSH KELIBSIZ</h4>
      //           {/* <br /> */}
      //           <h1>MAKTABIMIZGA</h1>
      //           <div className="yozuvBtn">
      //             <Link to="/maktabhayoti/">
      //               <Button style={{backgroundColor:'#1EB2A6'}}>Maktab hayoti</Button>
      //             </Link>
      //           </div>
      //         </div>
      //       </div>
      //       <div className={style.containerRow} style={{backgroundColor:'#F8F8F8'}}>
      //      <Container>
      //      <Row>
      //           <Col xs={12} sm={12} md={6} lg={6} className={style.video} >
      //             <h3>Maktabga video sayohat</h3>
      //             {/* <img src={rasm1} className={style.img}/> */}
      //             <YouTube
      //               videoId={
      //                 this.state.school !== null
      //                   ? this.state.school.video !== null
      //                     ? this.state.school.video.slice(
      //                         this.state.school.video.indexOf("youtu.be/") + 9
      //                       )
      //                     : ""
      //                   : ""
      //               }
      //               opts={{
      //                 width: "100%",
      //                 height: "300px",
      //                 playerVars: {
      //                   // https://developers.google.com/youtube/player_parameters
      //                   autoplay: 0,
      //                 },
      //               }}
      //               className={style.video}
      //             />
      //             <p className={style.pp}>
      //               Maktabimizga virtual sayohat qiling va siz bizning
      //               maktabimiz haqida ko'proq ma'lumotga ega bo'ling.
      //             </p>
      //           </Col>

      //           <Col xs={12} sm={12} md={6} lg={6} className={style.video}>
      //             <h3>Maktabdagi yangiliklari va o'zgarishlar</h3>
      //             <Row>
      //               <Col xs={12} sm={12} md={12} lg={12} className={style.newCard}>
      //                 <Row>
      //                   {this.state.news.map((item, key) => {
      //                     return key < 5 ? (
      //                       <div className={style.new}>
      //                                <div className={style.new_img}><img src={item.image}/></div>
      //                                <div className={style.new_text}>
      //                                    <div className={style.meta}>
      //                                        <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}> {item.published_time.substring(0, 10)}</span></div>
      //                                        <p>{item.title}</p>
      //                                    </div>
      //                                </div>
      //                            </div>
      //                     ) : (
      //                       ""
      //                     );
      //                   })}
      //                 </Row>
      //               </Col>
      //             </Row>

      //             <Link to={`/yangiliklar/`}>
      //               <button className={style.buttoncha}>
      //                 <span>Barchasini o'qish</span>
      //               </button>
      //             </Link>
      //           </Col>
      //         </Row>
      //      </Container>
      //       </div>

      //       {/* <div className="oq"></div> */}
      //       <BoshSahifaDavomi />
      //       <div className={style.container} style={{position:'relative'}}>
      //         <div className={style.bir}>
      //           <div className={style.containercha}>
      //             <img
      //               src={
      //                 this.state.school !== null
      //                   ? this.state.school.b_c2 !== null
      //                     ? this.state.school.b_c2
      //                     : rasm2
      //                   : rasm2
      //               }
      //               className={style.image}
      //             />
      //             <div className={style.overlay}>
      //               <Link style={{ color: "white" }} to={`/yangiliklar/`}>
      //                 <h4 style={{transition:'all 0.3', backgroundColor:'#1EB2A6',color:'white',padding:'10px 30px',display:'inline-block'}}>Yangiliklar</h4>
      //               </Link>
      //             </div>
      //           </div>
      //         </div>

      //         <div className={style.ikki}>
      //           <div className={style.containercha}>
      //             <img
      //               src={
      //                 this.state.school !== null
      //                   ? this.state.school.b_c1 !== null
      //                     ? this.state.school.b_c1
      //                     : rasm1
      //                   : rasm1
      //               }
      //               className={style.image}
      //             />
      //             <div className={style.overlay}>
      //               <h4 style={{backgroundColor:'#1EB2A6',color:'white',padding:'10px 30px',display:'inline-block'}}>Yutuqlarimiz</h4>
      //             </div>
      //           </div>
      //         </div>
      //         <div className={style.uch}>
      //           <div className={style.containercha}>
      //             <img
      //               src={
      //                 this.state.school !== null
      //                   ? this.state.school.b_c3 !== null
      //                     ? this.state.school.b_c3
      //                     : rasm3
      //                   : rasm3
      //               }
      //               className={style.image}
      //             />
      //             <div className={style.overlay}>
      //               <Link style={{ color: "white" }} to={`/gallery/`}>
      //                 <h4 style={{ transition:'all 0.3',backgroundColor:'#1EB2A6',color:'white',padding:'10px 30px',display:'inline-block'}}>Fotolavhalar</h4>
      //               </Link>{" "}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <MaktabTadbirlari />
      //       <Footer />
      //     </div>
      //   )}
      // </div>
    );
  }
}
