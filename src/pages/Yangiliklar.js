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
import{url} from '../host/Host'
import Global from "../host/Global";
import { Modal } from 'antd';

export default class Yangiliklar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false ,
      news: [],
       id: 0,
       loader:true,
       perPage: 6,
       page: 0,
       pages: 0,
};
this.handlePageClick = this
.handlePageClick
.bind(this);
this.showModal = this
.showModal
.bind(this);
this.hideModal = this
.hideModal
.bind(this);
}
showModal = () => {
  this.setState({
    visible: true,
  });
};

hideModal = () => {
  this.setState({
    visible: false,
  });
};

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
  getNews = async() => {
    let res = await axios.get( `${url}/new/${Global.schoolId}/`).catch(err => console.log(err));
    
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            news: res.data,
            loader: false,
            pages: Math.floor(res.data.length / this.state.perPage)
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
      
  };
  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({page})
  }
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getNews();
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
  const {page, perPage, pages, news} = this.state;
   let items = news.slice(page * perPage, (page + 1) * perPage);
   let weathers = items.map((item,key) => {
     return (
      <div style={{width:'350px',height:'43 0px',margin:'30px',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',borderRadius:'5px',backgroundColor:'white'}}>
                   <div style={{width:'100%',height:'250px'}}>
                      <img src={item.image} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                   </div>
                   <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                       <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#1EB2A6',fontSize:'14px',fontWeight:'700'}}> {item.published_time.substring(
                                             0,
                                              10
                                            )}{" "}</span>
                       <h4 style={{marginTop:'20px'}}>{item.title}</h4>
                       <p className={styles.btnNews} style={{cursor:'pointer',border:'1px solid #1EB2A6', transition:'all 0.3s', backgroundColor:'#1EB2A6',color:'white',padding:'5px 20px',display:'inline-block'}} onClick={() => {
                                  this.setState({ id: key, visible:true });
                                }}>Batafsil</p>
                    </div>
               </div>
     )
   }) || '';
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
          
              {weathers}
           
       
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <ReactPaginate
         previousLabel={'oldingisi'}
         nextLabel={'keyingisi'}
         pageCount={pages}
         onPageChange={this.handlePageClick}
         containerClassName={'pagination'}
         activeClassName={'active'}
       />
      </div>
        <Footer/>
        <Modal
        width={1000}
          title={false}
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Yopish"
          closable={false}
          maskClosable={true}
        >
        {
          this.state.news.map((item,key)=>{
            return(
              this.state.id===key?(
                <div>
                   <h3>{item.title}</h3>
                 <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#1EB2A6',fontSize:'14px',fontWeight:'700'}}> {item.published_time.substring(
                  0,
                   10
                 )}{" "}</span>
                 <p>{item.text}</p>
                </div>
                ):''
            )
          })
        }
        </Modal>
     </div>
        )}
        </div>
    );
  }
}
