import React, { Component } from 'react'

class Frontend extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            Dados: [],
        })
    }

    getAPI = () => {
        fetch('https://api.github.com/repos/frontendbr/vagas/issues')
            .then(response => response.json())
            .then(response => {
                response.map((dados) => {
                    console.log(dados.body)
                    this.setState({
                        Dados: [
                            ...this.state.Dados, {
                                titulo: dados.title,
                                descricao: dados.body,
                                imagem: dados.user.avatar_url,
                                estado: dados.state
                            }
                        ]
                    })
                })
            })
    }

    componentDidMount = () => {
        this.getAPI()
    }

    render = () => {
        const state = this.state
        return (
            <>
                <div className="container">
                    <div className="mb-3"></div>
                    <h2>Vagas Front-end</h2>
                    <hr />
                    {state.Dados.map((dd, index) => (
                        <>
                            <div className="row">
                                <div key={index} className="col-md-12">
                                    <div className="card d-flex margin-bottom shadow-lg" >
                                        <div className="card-header" key={index}>
                                            <a href={dd.url} target="_blank" rel="noopener noreferrer"><h5 className="text-danger">{dd.titulo}</h5></a>
                                        </div>
                                        <div className="card-body">
                                            {dd.descricao}
                                            <hr></hr>
                                            <h5 className="card-text">Vaga:
                                                {dd.estado === 'open' ? ' Aberta' : ' Fechada'}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3"></div>
                        </>
                    )
                    )}

                </div>
            </>
        )
    }
}

export default Frontend