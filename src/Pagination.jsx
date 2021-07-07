import React, { Component} from "react"

class Pagination extends React.Component {
     
      constructor(props){
          super(props);
          this.state = {
              isEditAble:true
          }
          
      }

      render(){
           let {
               next,
               isNext,
               currentPage,
               totalPage,
               isPrev,
               prev,
               handlePageChange,
               goToPage
           } = this.props;
          return (
              <div className="row container">
                  <div className="col s4">
                      <button className="btn"
                       disabled={!isPrev}
                       onClick={() =>{
                           prev()
                       }}
                      style={{background:'rgb(89 177 222)'}}>Previus</button>
                  </div>
                  <div className="col s4">
                       <button style={{border:'none',}} onClick={() => this.setState({isEditAble:false})}>
                           {this.state.isEditAble ===  true ? (
                             <div>
                                 <small style={{fontSize:15}}>{currentPage} of {totalPage} </small><br/>
                                 <small>click and inter </small>
                             </div>
                           ) : (
                              <input type="number" value={currentPage}
                                 onChange={e => handlePageChange(e.target.value)}
                                 onKeyPress={(e) =>{
                                    if(e.key === 'Enter'){
                                        this.setState({
                                            isEditAble:true
                                        })

                                        goToPage();

                                    }
                                 }}
                              />
                           )}
                       </button>
                  </div>

                  <div className="col s4">
                       <button className="btn" disabled={!isNext}
                       onClick={() =>{
                           next()
                       }}
                       style={{backgroundColor:'rgb(89 177 222)'}}>Next</button>
                  </div>
              </div>
          )
      }

}

export default Pagination;