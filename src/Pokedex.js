import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const {pokemonsApp} = this.props;
        return(
        <div className="pokedex">
            { pokemonsApp.map(item => <Pokemon key={item.id} pokemon={item} /> )}
        </div>);
    }
}

export default Pokedex;