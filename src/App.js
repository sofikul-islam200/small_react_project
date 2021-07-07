import "./App.css";
import React, { Component } from "react";
import Header from "./Header"
import  "./App.css"
import News ,{Categorylist} from "./CategoryList"
import NewsList from "./NewsList"
import logo from "./images/1f.jpg"
import Pagination from "./Pagination"
import Footer from "./Footer"
import Loading from "./Loading"

//define categorylist class object
let news = new News('technology');

class App extends React.Component {

     
   state = {
       data:{},
       isLoading: true
   }



  componentDidMount(){
       news.getNews().then(data =>{
            this.setState({data,isLoading:false})   
       }).catch(e =>{
         console.log(e)
         alert('something went rong');
         this.setState({isLoading:false})
       });
  }

  // for pagication component

  Next = () => {
    if(this.state.data.isNext){
       this.setState({isLoading:true})
    }
     
    news.next().then(data =>{
          this.setState({data,isLoading:false})
       })
       .catch(e =>{
         console.log(e);
         alert('someting went rong');
         this.setState({isLoading:false})
       })
     

  }

  //for pagination component
  Prev = () =>{
     if(this.state.data.isPrev){
        this.setState({isLoading:true})
     }

     news.prev().then(data =>{
         this.setState({data,isLoading:false})
     }).catch(e =>{
       console.log(e)
       alert('something went rong');
       this.setState({isLoading:false})
     })
  }

   

  //for pagination component setcurrent page 

  handlePageChange = pagenumber =>{
         this.setState({
             data:{
               ...this.state.data,
               currentPage:pagenumber,
             }
         })
  }


  goToPage = () =>{
      this.setState({isLoading:true})
      news.setCurrentPage(this.state.data.currentPage)
         .then(data =>{
           this.setState({data, isLoading:false})
         })
         .catch(e =>{
           console.log(e)
           alert('something went wrong');
           this.setState({
             isLoading:false,
           })
         })
  }






  render() {
     
     let {
       isNext,
       currentPage,
       totalPage,
       isPrev,
       category,

     }  = this.state.data;

    return (
      <div className="App container"  style={{ background: "white", padding: 10 }}>
          <Header singleCategory={Categorylist.technology} />
            {this.state.isLoading ? (
                 <Loading />
            ) : (
               <div>
                  <NewsList newsList={this.state.data.articles} />
                  <Pagination 
                  next={this.Next}
                   isNext={isNext} 
                   currentPage={currentPage} 
                   totalPage={totalPage}
                   prev={this.Prev}
                   isPrev={isPrev} 
                   handlePageChange = {this.handlePageChange}
                   goToPage={this.goToPage}
                   
                   />
                   
               </div>
            )}
            
            <Footer />
      </div>
    );
  }
}




export default App;
