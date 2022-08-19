import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import styles from './styles.module.css';

const midLinks = [
    { title: 'products', subMenu: [{ title: "all products", path: "/catalog" }, { title: "ball stencils", path: '/ball-stencils' }, { title: "ball markers", path: "ball-markers" }, { title: "divot repair tools", path: "divot-repair-tools" }] },
    { title: 'about', path: '/about', subMenu: [{ title: "About Us", path: "/about" }] },
    { title: 'contact', path: '/contact', subMenu: [{ title: "Get a quote", path: "/test1" }, { title: "Contact Support", path: '/test2' }] },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },

]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#66bb6a'
    }
}

export default function Header() {
    const { basket } = useAppSelector(state => state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <AppBar position="static" style={{ background: '#212121' }} sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink}
                        to='/'
                        sx={navStyles}>
                        HOME
                    </Typography>
                </Box>

                <div className={styles.navigationContainer}>
                    {midLinks.map(({ title, path, subMenu }) => (
                        <div className={styles.dropdownMain}>
                            <div className={styles.dropdownBtn}>
                                {title.toUpperCase()}
                            </div>
                            {subMenu.length > 0 ? (
                                <div className={styles.dropdownContentContainer}>
                                    <div className={styles.dropdownContent}>
                                        {subMenu.map((subMenuItem) => (
                                            <Link
                                                to={subMenuItem.path}
                                                key={subMenuItem.path}
                                                className={styles.dropdownLink}
                                            >
                                                {subMenuItem.title.toUpperCase()}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : <></>}
                        </div>
                    ))}
                </div>

                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={itemCount} color='error'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    )
}