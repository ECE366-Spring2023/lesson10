import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import {getAuth, signOut} from 'firebase/auth';
import useUser from "./hooks/useUser";

function Home() {
    const [data, setData] = useState(null);

    const {user, isLoading} = useUser();

    const navigate = useNavigate();

    useEffect(() => {

        const loadUsers = async () => {
            const token = user && await user.getIdToken();
            console.log(token);
            const headers = token ? {Authorization: `Bearer ${token}`} : {};
            const response = await axios.get(`/api/getUsers`, {headers});
            setData(response.data)
        }
        if (!isLoading) {
            loadUsers();
        }
    }, [isLoading, user]);
    if (data)
        return (
            <>
                <h1>RPS</h1>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    {user

                        ? <button onClick={() => {

                            signOut(getAuth());

                        }}>Log Out</button>

                        : <button onClick={() => {

                            navigate('/login')

                        }}>Log In</button>
                    }
                </nav>
                {user
                    ? <pre>{JSON.stringify(data, null, 2)}</pre>
                    : <p>Log in to view sensitive info!</p>
                }
            </>
        );
    return (
        <>
            <h1>RPS</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {user

                    ? <button onClick={() => {

                        signOut(getAuth());

                    }}>Log Out</button>

                    : <button onClick={() => {

                        navigate('/login')

                    }}>Log In</button>
                }
            </nav>
        </>
    );
}

export function About() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <h1>About Us</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <h1>Contact Us</h1>
        </div>
    );
}

export function App() {
    return <Home />;
}