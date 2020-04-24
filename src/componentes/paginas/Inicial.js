import React, { Component } from 'react'

class Inicial extends Component {
    constructor(props) {
        super(props)


        this.state = ({
            Dados: [],
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="mb-3"></div>
                    <h2>Vagas Front-end</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card d-flex margin-bottom shadow-lg" >
                                <div className="card-header">

                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Inicial