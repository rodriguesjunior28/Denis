import React, { Component } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import turismo3 from '../img/visao/turismo3.jpg';
import turismo1 from '../img/visao/turismo1.jpg';
import turismo4 from '../img/visao/turismo4.jpg';

class Visao extends Component {
    render() {
        return (
            <>
                <Header />
                <main class="container main">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <div class="text-center">
                                <h2 class="text-justify">
                                    Ser uma opção de lazer por se preocupar com o bem estar de quem
                                    oferecemos excelência nos serviços turísticos prestados, com
                                    responsabilidade social e ambiental."
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src={turismo3} alt="visão" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src={turismo1} alt="visão" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src={turismo4} alt="visão" />
                            </div>
                        </div>
                    </div>
                </main><br></br>
                <Footer />

            </>
        )
    }
}

export default Visao;