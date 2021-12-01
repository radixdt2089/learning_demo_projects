import Router from 'next/router';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_KEY

export function verifyToken(jwtToken){
    try {
        console.log(jwt.verify(jwtToken , SECRET_KEY));
        return jwt.verify(jwtToken , SECRET_KEY);
    }
    catch (e) {
        console.log('e:' ,e);
        return null;
    }
}



export function getAppCookies(req) {
    const parsedItems = {};
    if(req.header.cookie){
        const cookiesItems = req.headers.cookies.split('; ');
        cookiesItems.forEach(cookies => {
            const parsedItem = cookies.split("=");
            parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
        });
    }
    return parsedItems; 
}

export function setLogout(e) {
    e.prevetDefault();
    Cookies.remove('token');
    Router.push('/');
}