import React, { Component } from 'react'
import Card from '../../card/Card'
import Container from '../../container/Container'
import { List, Title } from './styles';
import api from '../../../services/api';

class Frontend extends Component {
    state = {
        repositories: [],
    }

    componentDidMount = () => {
        this.apiRepositories()
    }

    apiRepositories = async () => {
        const response = await api.get(`/repos/frontendbr/vagas/issues`, {
            params: {
                state: 'open',
            },
        })

        this.setState({
            repositories: response.data
        })
    }


    render = () => {
        const { repositories } = this.state;
        return (
            <>
                <Container>
                    <h5>Vagas Frontend</h5>
                    {repositories.map(repo => (
                        <Card>
                            <List>
                                <li key={repo.id}>
                                    <Title>{repo.title}</Title>
                                </li>
                                <p>{repo.body}</p>
                                <h5>{repo.state === 'open' ? ' Aberta' : ' Fechada'}</h5>
                            </List>
                        </Card>
                    ))}
                </Container>
            </>
        )
    }
}

export default Frontend