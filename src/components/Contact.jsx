import React from 'react';
import Layout from './Layout';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Contact() {

    const { } = useLoadScript({ googleMapsApiKey: "" });

    return (
        <Layout>
            <div>Contact</div>

        </Layout>
    )
}

export default Contact