import React, { Component } from 'react';

class PokemonIndex extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon;
  }
  
  render() {
    const lis = this.props.pokemon.map((poke, idx) => {
      return (<li key={idx}>
        {poke.name}
        <img src={poke.image_url} height="100" />
      </li>);
    });
    return (
      <ul>{lis}</ul>
      );
  }
}

export default PokemonIndex;