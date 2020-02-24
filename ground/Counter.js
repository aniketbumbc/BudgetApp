
console.log("test");

class Counter extends React.Component {

      constructor(props){
            super(props)
            this.addNum = this.addNum.bind(this);
            this.minusNum = this.minusNum.bind(this);
            this.resetNum = this.resetNum.bind(this);

            this.state ={
            count:0
            };
      }

      addNum(){
          this.setState((prevState)=>{
               return {
                  count:prevState.count+1
               } 
          })

      }
      minusNum(){
            this.setState((prevState)=>{
                  return{
                        count:prevState.count-1
                  }
            })
      }
      resetNum(){
            this.setState(()=>{
                  return{
                        count:0
                  }
            })
      }
      render() {
            return (
                  <div>
                        <h1> Counter</h1>                  
                        <h4> count:{this.state.count} </h4>               
                         <button onClick={this.addNum}>+1</button>
                        <button onClick={this.minusNum}>-1</button>
                        <button onClick={this.resetNum}>Reset</button> 
                  </div>

            );
      }

}


ReactDOM.render(<Counter />, document.getElementById('app'));














// let count = 0;

// const addNum = () =>{
//     count++;
//    renderCounter();

// }
// const minusNum = () =>{
//       count=count-1
//       renderCounter();
//   }

//   const resetNum = () =>{
//       count = 0;
//       renderCounter();
//   }  


// const renderCounter = () =>{
//       const template2 = (
//             <div>
//                   <h1> Counter</h1>
//                   <h4> count: {count}</h4>
//                   <button onClick={addNum}>+1</button>
//                   <button onClick={minusNum}>-1</button>
//                   <button onClick={resetNum}>Reset</button>
//             </div>
//       )
//       ReactDOM.render(template2, appRoot);

// };
// renderCounter();