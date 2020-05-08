import React, { Component } from 'react';
import api from '../../../services/api'
import Container from '../../container/Container'
import { List } from './styles';

class Mobile extends Component {
    state = {
        repositories: [],
        labels: []
    }

    componentDidMount() {
        this.apiRepositories();
        this.apiLabels()
    }

    apiRepositories = async () => {
        const response = await api.get(`repos/androiddevbr/vagas/issues`, {
            params: {
                state: 'open',
            },
        })

        console.log(response.data)

        this.setState({
            repositories: response.data,
        })

    }

    apiLabels = async () => {
        const response = await api.get(`androiddevbr/vagas/issues`, {
            params: {
                state: 'open',
            },
        })

        this.setState({
            labels: response.data
        })
    }


    render() {
        const { repositories, labels } = this.state;

        return (
            <>
                {repositories.map(repo => (
                    <Container>
                        <List>
                            <li key={repo.id}>
                                <h1>{repo.title}</h1>
                            </li>
                            <p>{repo.body}</p>
                            <h5>{repo.state === 'open' ? ' Aberta' : ' Fechada'}</h5>
                        </List>
                    </Container>
                ))}
            </>
        )
    }
}

export default Mobile;