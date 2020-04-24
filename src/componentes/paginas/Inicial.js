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
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card d-flex margin-bottom shadow-lg" >
                                <div className="card-header">
                                    <h1>Front-end</h1>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card d-flex margin-bottom shadow-lg" >
                                <div className="card-header">
                                    <h1>Back-end</h1>
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