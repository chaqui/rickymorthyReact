import React from 'react';
import logoCaricatura from './images/Rick_and_Morty.svg'
import Box from './components/Box'
import './css/app.css';

class App extends React.Component {
  state ={
    nextPage:1,
    loading:true,
    error:null,
    data:{
      results:[]
    }
  }

  componentDidMount(){
    this.fetchCharacters()
  }
  fetchCharacters= async ()=>
  {
    this.setState({loading:true, error:null})
    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
      const data = await response.json()
      this.setState({
        loading:false,
        data:data,
        nextPage: this.state.nextPage+1,
      })
    }
    catch(error)
    {
      this.setState({loading:false, error:error})
    }
    
  }

  render()
  {

    return (
      <div className="rick">
        <header className="header">
          <img src={logoCaricatura} alt=""/>
        </header>
        <div className="container">
          <ul className="row">
          {this.state.data.results.map(element=>(
            <li className="col-6 col-md-3" key={element.id}>
            <Box element={element}/>
            </li>
          ))}
          </ul>
          <button onClick={()=>this.fetchCharacters()} className="btn btn-primary btn-lg"> Load More</button>
        </div>
        
      </div>  );
  }
  }



export default App;
