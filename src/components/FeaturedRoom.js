import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from "./Title"

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;

    render() {
        // using room name instead of featureRoom variable
        let { loading, featuredRooms: rooms } = this.context;
        // console.log(rooms);
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <section>
                <Title title='featured rooms'></Title>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
