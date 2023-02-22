import {Container, Stack, Box, Heading, Select} from '@chakra-ui/react'

import React from "react";


const baseURL = 'https://moviesapi.space/@functions/api/';


async function getContent() {

    let settings = {
        mode: 'no-cors',
        method: "get",
        headers: {
             "Content-Type": "application/json"
        }}
    let url = 'https://moviesapi.space/@functions/api/'


    const response = await fetch(url, settings)
    const data =  await response.json()
    console.log(data)



}

export default function Content() {
    getContent();
    return (
    <Container>
        <Stack
            as={Box}
            alignItems='center'
            textAlign={'center'}
            spacing={{ base: 7 }}
            py={{ base: 17, md: 36 }}
        >
        <Heading size='xl'>Выбери кинотеатр</Heading>
            <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
            </Select>
        </Stack>
    </Container> );
}
