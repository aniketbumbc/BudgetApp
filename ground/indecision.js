console.log("Test");



const app = {
      title: "Make your habits",
      subTitle: "Follow your list",
      options: []
}
const onFormData = (e) =>{
      e.preventDefault();
     const option = e.target.elements.opt.value;
     if(option){
           app.options.push(option);
           e.target.elements.opt.value = '';
           renderList();
     }
}

const clearData = () =>{
      app.options = [];
      renderList();
}
 
const onDecisionTake = () =>{
      const ranNumber = Math.floor(Math.random()* app.options.length);
      const option = app.options[ranNumber];
      console.log(option);
}
const appRoot = document.getElementById('app');


const renderList = () =>{
      const template = (
            <div>
                  <h1> {app.title} </h1>
                  {app.subTitle && <p> {app.subTitle} </p>}
                  <p>{app.options.length ? 'some options are here' : 'No options'} </p>
                  <ol>
                        {
                              app.options.map((e)=>{return <li key ={e}>{e}</li>})
                        }
                  </ol>
                  <form onSubmit={onFormData}>
                  <input type="text" name="opt"/>
                  <button> Add Options</button>
                  <button onClick = {clearData}> Clear List </button>
                  <button  disabled={app.options.length === 0}  onClick = {onDecisionTake}> What should I do </button>
                  </form>
            </div>
      );
      ReactDOM.render(template, appRoot);
}
renderList();





