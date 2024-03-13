const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173/dashboard',
        clientId: 'd30ca688764443ffb81f127b239d58bb',
        clientSecret: 'ffd94bfb93624fde8f41e5c8f3cefc78',
        refreshToken
    });

    spotifyApi.refreshAccessToken().then(
        data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            });
        },
        err => {
            console.log('Could not refresh access token', err);
            res.sendStatus(400);
        }
    );
});

app.post('/login',(req, res) => {
    const code = req.body.code;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:5173/dashboard", // Update the redirect URL here
        clientId: 'd30ca688764443ffb81f127b239d58bb',
        clientSecret:'ffd94bfb93624fde8f41e5c8f3cefc78'
    })
    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
        console.log(data.body)
    }).catch((err) => {
        console.log('na meeeeeeee')
        console.log(err);
        res.sendStatus(400);
    })

})

app.listen(3001);