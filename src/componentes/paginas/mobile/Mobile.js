import React, { Component } from 'react';
import api from '../../../services/api'
import Card from '../../card/Card'
import Container from '../../container/Container'
import { List, Title } from './styles';

class Mobile extends Component {
    state = {
        repositories: [],
    }

    componentDidMount() {
        this.apiRepositories();
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


    render() {
        const { repositories } = this.state;

        return (
            <>
                <Container>
                    <h5>Vagas Mobile</h5>
                    {repositories.map(repo => (
                        <Card>
                            <List>
                                <li key={repo.id}>
                                    <Title>{repo.title}</Title>
                                </li>
                                <p>{repo.body}</p>
                                <h5>{repo.state === 'open' ? ' Vaga: Aberta' : 'Vaga: Fechada'}</h5>
                            </List>
                        </Card>
                    ))}
                </Container>
            </>
        )
    }
}

export default Mobile;