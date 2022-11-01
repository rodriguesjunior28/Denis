import React, { Component } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import imagem11 from '../img/Missao/imagem11.jpg';
import imagem7 from '../img/Missao/imagem7.jpg';
import imagem5 from '../img/Missao/imagem5';


class NossaMissao extends Component {
    render() {
        return (
            <>
                <Header />
                <main class="container main">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div class="text-center">
                                <h2 class="text-justify">
                                    "É oferecer um serviço de atendimento diferenciado, criando
                                    vínculos de amizade com seus clientes, procurando se colocar no
                                    lugar do cliente e buscando oferecer qualidade nos serviços
                                    prestados antes, durante e depois de cada evento realizado."
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src={imagem11} alt="missão" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src={imagem7} alt="missão" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src={imagem5} alt="missão" />
                            </div>
                        </div>
                    </div>
                </main><br></br>

                <Footer />
            </>
        )
    }
}

export default NossaMissao;