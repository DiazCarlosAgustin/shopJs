import React, { Component } from 'react'

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container mx-auto">
                <section className="w-full h-full py-10">
                    <h1 className="text-4xl text-gray-700 font-bold text-center mb-5">Contacto</h1>
                    <div className="flex justify-center">
                        <form className="max-w-xs md:max-w-sm lg:max-w-md w-full bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre">Nombre</label>
                                <input name="nombre" id="txtNombre" type="text" placeholder="Nombre" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                                <input name="email" id="txtEmail" type="text" placeholder="Email" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="asunto">Asunto</label>
                                <input name="asunto" id="txtAsunto" type="text" placeholder="Asunto" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="mensaje">Mensaje</label>
                                <textarea name="mensaje" id="txtAsunto" type="text" placeholder="Mensaje" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="mb-4 w-full flex justify-center">
                                <button className="bg-blue-500 rounded shadow w-full h-full p-3 text-white hover:bg-blue-600">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contacto;