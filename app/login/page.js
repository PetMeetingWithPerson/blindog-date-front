import {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";

export default function LoginPage() {
    const [user, setUser] = useState({});
    function handleChange(event) {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                    placeholder="이메일">
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange}
                    placeholder="비밀번호">
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button>
                    로그인
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button>
                    회원가입
                </Button>
            </Grid>
        </Grid>
    )
}