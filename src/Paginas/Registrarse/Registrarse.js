import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Registrarse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            confirmacionEmail: '',
            password: '',
            confirmacionPassword: '',
            telefono: ''
        };
    }
    render() {
        return (
            <div className="h-full w-full">
                <section className="w-full h-full flex justify-center pt-10">
                    <div className="w-full mx-auto">
                        <h1 className="text-4xl mb-5 w-full text-center font-bold text-gray-700">Registrarse</h1>
                        <div className="flex justify-center">
                            <form className="w-full max-w-xs md:max-w-md shadow-md bg-white rounded-md px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre">Nombre</label>
                                    <input name="nombre" id="txtNombre" type="text" placeholder="Nombre" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <p className="text-red-500 p-2 hidden">Error</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="apellido">Apellido</label>
                                    <input name="apellido" id="txtApellido" type="text" placeholder="Apellido" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <p className="text-red-500 p-2 hidden">Error</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                                    <input name="email" id="txtEmail" type="text" placeholder="Email" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <p className="text-red-500 p-2 hidden">Error</p>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="contraseña">Contraseña</label>
                                    <input name="contraseña" id="txtPassword" type="Password" placeholder="Contraseña" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <p className="text-red-500 p-2 hidden">Error</p>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="confirmarContraseña">Confirmar contraseña</label>
                                    <input name="confirmarContraseña" id="txtConfirmarContraseña" type="Password" placeholder="Confirmar contraseña" className="shadow appearance-none rounded-sm py-2 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <p className="text-red-500 p-2 hidden">Error</p>
                                </div>
                                <div className="mb-2 text-center">
                                    <Link to="/registrarse" className="text-lg text-blue-500">No tengo una cuenta</Link>
                                </div>
                                <div className="mb-4 text-center">
                                    <Link to="/forgetPassword" className="text-lg text-blue-500">Olvide mi contraseña</Link>
                                </div>
                                <div>
                                    <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded w-full">Ingresar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Registrarse;