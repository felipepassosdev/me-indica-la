import React, { Component } from 'react'
import Frontend from './Frondend'

class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            Dados: [],
        })
    }


    render() {
        
        return (
            <>
               <Frontend />
            </>
        )
    }
}

export default Cards