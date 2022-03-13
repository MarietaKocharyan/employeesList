import { useHistory } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ user }) {
    const history = useHistory();

    return (
        <Card sx={{ maxWidth: 345 }} key={user.firstName}>
            <CardMedia component="img" height="140" image={`https://picsum.photos/200/300?random=${user.id}`} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.firstName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    email : {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    gender : {user.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    department : {user.department}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => history.push(`/user/${user.id}`)}>
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
}
