import React, { Component } from "react";
import Footer from '../layout/Footer';
import Header from '../layout/Header';


class Cadastro extends Component {
    render() {
        return (
            <>
                <Header />
                <main class="container main">
                    <div class="row">
                        <div class="col-md-12">
                            <form>
                                <h1 class="" style="text-align:center;">Favor preencher os campos abaixo:</h1><br></br>
                                    <div class="form-row">

                                        <div class="form-group col-md-3">
                                            <label for="inputEmail4">Usuário</label>
                                            <input type="email" class="form-control" id="inputUsuario" placeholder="Usuário" />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputPassword4">Senha</label>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputCEP">E-mail</label>
                                            <input type="text" class="form-control" id="inputEmail14" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Endereço</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Pessoa Fisica / Pessoa Juridica</label>
                                        <input type="text" class="form-control" id="inputPessoa" placeholder="Fisica / Juridica" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">Cidade</label>
                                            <input type="text" class="form-control" id="inputCity" placeholder="Cidade" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEstado">Estado</label>
                                            <select id="inputEstado" class="form-control">
                                                <option selected>Escolher...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputCEP">CEP</label>
                                            <input type="text" class="form-control" id="inputCEP" placeholder="40.000-000" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                <label class="form-check-label" for="gridCheck">
                                                    Clique em mim
                                                </label>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Entrar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </main>
                <Footer />
            </>
        )
    }
}

export default Cadastro;