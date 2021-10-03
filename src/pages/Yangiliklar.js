import React, { Component } from "react";
import yangilik1 from "../img/yangilik1.jpg";
import yangilik2 from "../img/yangilik2.jpg";
import new1 from "../img/new1.jpg";
import new2 from "../img/new2.jpg";
import new3 from "../img/new3.jpg";
import new4 from "../img/new4.jpg";
import styles from "../css/yangiliklar.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { getNews } from "../host/Config";
import  ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from  './Navbar'
import Footer from './Footer'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import '../App.css'
import {FaRegCalendarAlt} from 'react-icons/fa'
import school1 from '../img/school1.jpg'
export default class Yangiliklar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
       id: 0,
       loader:true,
      offset: 0,
      data: [
          {   
              image:school1,
              date:'JAN. 18, 2021',
              title:'Build your Dream Software & Engineering Career',
              text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
          },
          {   
              image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {   
            image:school1,
            date:'JAN. 18, 2021',
            title:'Build your Dream Software & Engineering Career',
            text:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        }
      ],
      perPage: 4,
      currentPage: 0
};
this.handlePageClick = this
.handlePageClick
.bind(this);
}

handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};
  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          this.receivedData(res.data)
          this.setState({
            news: res.data,
            loader: false,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
            loader: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          loader: false,
        });
      });
  };
  receivedData=(data)=> {
            
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
    const postData = slice.map(pd => <React.Fragment>
        <div style={{width:'350px',height:'500px',margin:'30px',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',borderRadius:'5px'}}>
            <div style={{width:'100%',height:'250px'}}>
                <img src={pd.image} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
            </div>
            <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>{pd.date}</span>
                <h4 style={{marginTop:'20px'}}>{pd.title}</h4>
            
             </div>
        </div>
        
    </React.Fragment>)

    this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
       
        postData
    })

}
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getNews();
    console.log(this.state.news)
  }
  render() {
    const contentStyle = {
      width: "100%",
      objectFit: "cover",
      color: "#fff",
      lineHeight: "30vh",
      textAlign: "center",
      fontFamily: "Lobster",
    };
    return (


      <div>
      {this.state.loader ? (
        <div className={styles.loader}>
          <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
        </div>
      ) : (
     <div style={{backgroundColor:'#F8F8F8',textAlign:'center'}}>
         <Navbar/>
         <div className={styles.header}>
            <h1>Yangiliklar</h1>
         </div>
         <h2 style={{textAlign:'center',backgroundColor:'#F8F8F8',marginBottom:'0',marginTop:'20px'}}>So'nngi yangiliklar</h2>
          <div className={styles.news}>
          
                  {this.state.postData}
           
       
      </div>
      <ReactPaginate
            previousLabel={"oldingisi"}
            nextLabel={"keyingisi"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
        <Footer/>
     </div>
        )}
        </div>
      // <div>
      //   {this.state.loader ? (
      //     <div className="loader">
      //       < ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
      //     </div>
      //   ) : (
      //     <>
      //       <Navbar/>
      //       <div className={styles.header}>
      //         <h1>Maktabimiz so'nggi yangiliklari</h1>
      //      </div>

      //       <Container fluid>
      //         <div className={styles.yangi}>
      //           <h1 style={{ fontSize: "60px" }} data-aos="fade-up">
      //             Yangiliklar
      //           </h1>
      //         </div>
      //         <Row>
      //           <Col lg={7}>
      //             {this.state.news.length !== 0 ? (
      //               <div className={styles.news} data-aos="zoom-in-right">
      //                 <img
      //                   src={this.state.news[this.state.id].image}
      //                   alt="Foto lavha"
      //                 />
      //                 <h4 style={{color:'#1EB2A6',marginTop:'30px'}}>{this.state.news[this.state.id].title}</h4>

      //                 <p className={styles.date}>
      //                   <i
      //                     style={{ marginRight: "10px" }}
      //                     class="far fa-calendar-alt"
      //                   ></i>
      //                   {this.state.news[
      //                     this.state.id
      //                   ].published_time.substring(0, 10)}
      //                 </p>
      //                 <p>{this.state.news[this.state.id].text}</p>
      //               </div>
      //             ) : (
      //               ""
      //             )}
      //           </Col>
      //           <Col lg={5}>
      //             <div className={styles.recent_news} data-aos="zoom-in-left">
      //               <div className={styles.title}>
      //                 <h3>So'nggi yangiliklar</h3>
      //               </div>
      //               <div className={styles.body}>
      //                 <Row>
      //                   {this.state.news.map((item, key) => {
      //                     return (
      //                       <Col
      //                         lg={12}
      //                         md={12}
      //                         sm={12}
      //                         style={{ marginBottom: "10px" }}
      //                         className={styles.body_card}
      //                       >
      //                         <MDBCard
      //                           onClick={() => {
      //                             this.setState({ id: key });
      //                           }}
      //                           style={{ maxWidth: "540px" }}
      //                         >
      //                           <MDBRow className="g-0">
      //                             <MDBCol md="4">
      //                               <MDBCardImage
      //                                 src={item.image}
      //                                 alt="..."
      //                                 fluid
      //                                 style={{ margin: "7px" }}
      //                               />
      //                             </MDBCol>
      //                             <MDBCol md="8">
      //                               <MDBCardBody>
      //                                 <MDBCardTitle>{item.title}</MDBCardTitle>

      //                                 <MDBCardText>
      //                                   <small className="text-muted">
      //                                     <p className={styles.date}>
      //                                       <i
      //                                         style={{ marginRight: "10px" }}
      //                                         class="far fa-calendar-alt"
      //                                       ></i>
      //                                       {item.published_time.substring(
      //                                         0,
      //                                         10
      //                                       )}{" "}
      //                                     </p>{" "}
      //                                   </small>
      //                                 </MDBCardText>
      //                               </MDBCardBody>
      //                             </MDBCol>
      //                           </MDBRow>
      //                         </MDBCard>
      //                       </Col>
      //                     );
      //                   })}
      //                 </Row>
      //               </div>
      //             </div>
      //           </Col>
      //         </Row>
      //       </Container>
      //       <Footer/>
      //     </>
      //   )}
      // </div>
    );
  }
}
