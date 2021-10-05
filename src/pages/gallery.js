import React, { Component } from "react";
import style from "../css/gallery.module.css";
import styles from "../css/qabul.module.css";
import "../App.css";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from "mdbreact";
import Lightbox from "react-image-lightbox";
import img1 from "../img/b1.JPG";
import img2 from "../img/b2.jpg";
import img3 from "../img/b3.jpg";
import img4 from "../img/b4.jpg";
import img5 from "../img/b5.jpg";
import img6 from "../img/b6.jpg";
import img7 from "../img/b7.png";
import tav_img from "../img/tav_img.jpg";
import talab from "../img/talab.jpg";
import { Carousel } from "antd";
import ScaleLoader from "react-spinners/ScaleLoader";
import { idMaktab, url, user } from "../host/Host";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Global from "../host/Global";
import Navbar from './Navbar'
import Footer from './Footer'
export default class Gallery extends Component {


  state = {
    school: [],
    loader: true,
    images:[],
    smallImages:[],
    photoIndex: 0,
    isOpen: false
  };
  getSchool = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
         
        });
        this.getPhotos()
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 4000);

        
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  getPhotos(){
    var images=[];
    var smallImages=[];
      this.state.school !== null
      ? this.state.school.foto !== null
        ? images.push(this.state.school.foto)
        : images.push('rasm')
      : images.push('rasm')
  
                            this.state.school !== null
                            ? this.state.school.foto1 !== null
                            ? images.push(this.state.school.foto1)
        : images.push('rasm')
      : images.push('rasm')
  
                            this.state.school !== null
                            ? this.state.school.foto2 !== null
                            ? images.push(this.state.school.foto2)
                            : images.push('rasm')
                          : images.push('rasm')
  
                            this.state.school !== null
                            ? this.state.school.foto3 !== null
                            ? images.push(this.state.school.foto3)
                            : images.push('rasm')
                          : images.push('rasm')
  
                            this.state.school !== null
                            ? this.state.school.foto4 !== null
                            ? images.push(this.state.school.foto4)
                            : images.push('rasm')
                          : images.push('rasm')
  
                            this.state.school !== null
                            ? this.state.school.foto5 !== null
                            ? images.push(this.state.school.foto5)
                            : images.push('rasm')
                          : images.push('rasm')

                            this.state.school !== null
                            ? this.state.school.foto6 !== null
                            ? images.push(this.state.school.foto6)
                            : images.push('rasm')
                          : images.push('rasm')
                          
                            this.state.school !== null
                            ? this.state.school.foto7 !== null
                            ? images.push(this.state.school.foto7)
                            : images.push('rasm')
                          : images.push('rasm')

                          smallImages = [...images]
                          console.log(smallImages)
                          console.log(images)
  
   this.setState({
     images:images,
     smallImages:smallImages
   })
                           
    }

  componentDidMount() {
    this.getSchool();
   
  }
  render() {
    const { photoIndex, isOpen, images, smallImages } = this.state;

    return (
      <div>
        {this.state.loader ? (
           <div className={styles.loader}>
           <div><ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} /></div>
           <div><p>Sayt test rejimida ishlamoqda</p></div>
           </div>  
        ) : (
          <div>
         <Navbar />
                   
                   <h1 className={styles.headerh}>Foto lavhalar</h1>
                   <Carousel
                   dots={false}
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-1" ,width:'100%'}}
                 
                  >
                     {
               this.state.images!==null? this.state.images.map((item,id)=>{
                return(
                  <div>
            
                  <img  
                    style={{objectFit:'cover'}}
                   src={
                     item
                         }
                         className={styles.headerImage}
                         />
                    </div>  
                )
               }):''
             }
          
       
           </Carousel>
           <h1 data-aos="fade-up" className={style.foto} style={{marginTop:'100px', }}>Maktab hayotidan qiziqarli foto lavhalar</h1>
              <div data-aos="fade-up" className={style.line}></div>
            <MDBContainer style={{marginTop:'100px', }}>
              
        <div className="mdb-lightbox no-margin">
          <MDBRow >
            <MDBCol md="4" data-aos="zoom-in">
            <MDBView >
              <figure>
              
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
            
              </figure>
              </MDBView>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in"> 
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4" data-aos="zoom-in">
              <figure>
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>

            {/* <Container>
              <Row style={{ justifyContent: "center" }}>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                  </div>{" "}
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={12} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={12} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                  </div>
                </Col>
              </Row>
            </Container> */}
            <Footer/>
          </div>
        )}
      </div>
    );
  }
}
