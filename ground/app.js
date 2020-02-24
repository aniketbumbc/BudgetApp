class DecisionApp extends React.Component {
      constructor(props) {
            super(props);
            this.handleDeleteAllOpts = this.handleDeleteAllOpts.bind(this);
            this.handlePicOptions = this.handlePicOptions.bind(this);
            this.handleAddOptions = this.handleAddOptions.bind(this);
            this.handleDeleteOption = this.handleDeleteOption.bind(this);
            this.state = {
                  options: []
            }
      }

      componentDidMount() {
            const json = localStorage.getItem('opt');
            const options = JSON.parse(json);
            if (options) {
                  this.setState(() => {
                        return {
                              options: options
                        }
                  })
            }

      }


      componentDidUpdate(prevState, prevProps) {

            if (prevState.options.length != this.state.options.length) {
                  const json = JSON.stringify(this.state.options);
                  localStorage.setItem('opt', json);
            }

      }














      handleDeleteAllOpts() {
            this.setState(() => {
                  return {
                        options: []
                  };
            });

      }
      handlePicOptions() {
            const ranNumber = Math.floor(Math.random() * this.state.options.length);
            const value = this.state.options[ranNumber];
            alert(value);
      }

      handleAddOptions(opt) {

            if (!opt) {

                  return 'Invalid value add options'
            } else if (this.state.options.indexOf(opt) > -1) {
                  return 'Duplicate option'
            }
            this.setState((preState) => {
                  return {
                        options: preState.options.concat([opt])
                  }
            })

      }
      handleDeleteOption(optToRemove) {
            this.setState((preState) => ({
                  options: preState.options.filter((opt) => {
                        return optToRemove !== opt
                  })

            }));
      }



      render() {

            const subTitle = 'Follow your decision!!!';
            return (
                  <div>
                        <Header subTitle={subTitle} />
                        <Action hasOption={this.state.options.length > 0}
                              handlePicOptions={this.handlePicOptions}
                        />
                        <Options
                              options={this.state.options}
                              handleDeleteAllOpts={this.handleDeleteAllOpts}
                              handleDeleteOption={this.handleDeleteOption}

                        />
                        <Addoptions handleAddOptions={this.handleAddOptions} />
                  </div>

            )
      }
}


DecisionApp.defaultProps = {
      options: []
}



const Header = (props) => {
      return (
            <div>
                  <h1>{props.title}</h1>
                  {props.subTitle && <h2>{props.subTitle} </h2>}

            </div>
      );

}

Header.defaultProps = {
      title: 'Decision App'

}


const Action = (props) => {
      return (
            <div>
                  <button
                        onClick={props.handlePicOptions}
                        disabled={!props.hasOption}
                  >what should I do
                  </button>
            </div>
      );

}

const Options = (props) => {

      return (
            <div>
                  <button onClick={props.handleDeleteAllOpts}>Remove All</button>
                  { props.options.length === 0 &&  <h5> Please add option </h5> }
                  <p>options are here</p>
                  {
                        props.options.map((e) =>
                              <SingleOption
                                    key={e}
                                    optionText={e}
                                    handleDeleteOption={props.handleDeleteOption}
                              />
                        )
                  }

            </div>
      );

}

const SingleOption = (props) => {
      return (
            <div>
                  option:{props.optionText}
                  <button onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                  }}>remove</button>
            </div>
      )

}



class Addoptions extends React.Component {
      constructor(props) {
            super(props)
            this.handleAddOption = this.handleAddOption.bind(this);
            this.state = {
                  error: undefined
            }
      }


      handleAddOption(e) {
            e.preventDefault();
            let value = e.target.elements.opt.value;
            value = value.trim();
            const error = this.props.handleAddOptions(value);
            this.setState(() => ({ error: error }));

            if(!error){
                  e.target.elements.opt.value = ' ';
            }
      }
      render() {
            return (
                  <div>
                        {this.state.error && <p>{this.state.error}</p>}
                        <form onSubmit={this.handleAddOption}>
                              <input type="text" name="opt" />
                              <button>Add option</button>
                        </form>
                  </div>
            );
      }



}



ReactDOM.render(<DecisionApp />, document.getElementById('app'));