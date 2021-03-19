import React, { useState } from 'react';
import { Divider, Grid, Image, Header, Button, Icon, List } from 'semantic-ui-react'

import carbon_knight from './images/carbon_knight.png'
import home_page from './images/home_page.png'
import saved_footprints from './images/saved_footprints.png'
import new_vehicle from './images/new_vehicle.png'
import mileage_input from './images/mileage_input.png'
import resources from './images/resources.png'
import github from '../../../images/github_logo.png'
import heroku from '../../../images/heroku_logo.png'

const CarbonKnight = () => {
    const [currentImage, setImage] = useState(0);
    const [images] = useState([
        carbon_knight,
        home_page,
        saved_footprints,
        new_vehicle,
        mileage_input,
        resources
    ])

    const nextImage = () => {
        if (currentImage < images.length - 1) {
            setImage(currentImage + 1)
        } else {
            setImage(0)
        }
    }

    const previousImage = () => {
        if (currentImage > 0) {
            setImage(currentImage - 1)
        } else {
            setImage(images.length - 1)
        }
    }

    return (
        <Grid columns={2} relaxed='very'>
            <Grid.Column>
                <h1>
                    CarbonKnight
                    <Image floated="right" src={github} size='mini' href="https://github.com/Carbon-Knight" target='_blank' />
                    <Image rounded floated="right" src={heroku} size='mini' href="https://carbon-knight.herokuapp.com/" target='_blank' />
                </h1>

                <Divider clearing/>

                <p>
                    CarbonKnight is an application where a user is able to input their travel data and see what their unique carbon footprint is over time.
                </p>

                <Divider hidden />

                <Grid container>
                    <Grid.Row>
                        <Header as='h4'>Main technologies used:</Header>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column width='5'>
                            <div>
                                <List relaxed>
                                    <List.Item>
                                        <Icon name='right triangle' />
                                        Ruby On Rails
                                    </List.Item>

                                    <List.Item>
                                        <Icon name='right triangle' />
                                        GraphQL
                                    </List.Item>

                                    <List.Item>
                                        <Icon name='right triangle' />
                                        PostgreSQL
                                    </List.Item>                                   
                                </List>
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div>
                                <List relaxed>
                                    <List.Item>
                                        <Icon name='right triangle' />
                                        Active Record
                                    </List.Item>

                                    <List.Item>
                                        <Icon name='right triangle' />
                                        Heroku
                                    </List.Item> 

                                    <List.Item>
                                        <Icon name='right triangle' />
                                        TravisCI
                                    </List.Item>                                   
                                </List>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
            
            <Grid.Column style={{ position: "relative", display: "flex"}}> 
                <Image rounded fluid src={images[currentImage]} />
                <div style={{position: "absolute", top: 170}}>
                    <Button active circular icon basic onClick={() => previousImage()}>
                        <Icon name='arrow left' />
                    </Button>
                </div>

                <div style={{ position: "absolute", top: 170, right: 32 }}>
                    <Button active circular basic icon onClick={() => nextImage()}>
                        <Icon name='arrow right' />
                    </Button>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default CarbonKnight