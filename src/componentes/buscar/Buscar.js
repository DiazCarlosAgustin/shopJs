import React, { Component } from 'react'

class Buscar extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }
    render() {
        return (
            <div className={"w-full items-center justify-center transition ease-in-out duration-700 " + (this.props.isSearchOpen ? 'flex' : 'hidden') }>
                <form className="bg-white shadow-md px-4 py-3 w-full">
                    <input type="text" placeholder="Buscar" className="align-middle block w-full h-12 px-2 text-gray-500 text-sm font-bold"/>
                </form>
            </div>
        );
    }
}

export default Buscar;