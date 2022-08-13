import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'products', path: '/catalog', subMenu: [{title: "Balls", path: "/test1"}, {title: "Clubs", path: '/test2'}, {title: "Tees", path: "/test1"}, {title: "Clothing", path: "/test1"}] },
    { title: 'about', path: '/about', subMenu: [{title: "About Us", path: "/test1"}, {title: "Who We Are", path: '/test2'}] },
    { title: 'contact', path: '/contact', subMenu: [{title: "Get a quote", path: "/test1"}, {title: "Contact Support", path: '/test2'}] },
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
        color: 'black'
    }
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink}
                        to='/'
                        sx={navStyles}>
                        Golf Customs
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
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
                    <IconButton size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={1} color='error'>
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