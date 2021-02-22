import react from 'react';

class App extends react.Component {
  render() {

    let array = [{name:"Wajiha"},{name:"siddiqui"}];

    return (
      <div>
        <ul>
          {array.map((item,index)=>{
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </div>
    )
  }
}


export default App;
  