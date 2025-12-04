import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
    AspectRatio,
    Box,
    Card,
    CardContent,
    CardOverflow,
    Chip,
    Container,
    IconButton,
    Link,
    Sheet,
    Typography,
} from "@mui/joy";
import Icon from "../assets/icon.png";

interface Product {
    title: string;
    description: string;
    image: string;
    icon: string
    link: string;
    tags: string[];
}

const products: Product[] = [
    {
        title: "Pixi'VN",
        description:
            "A highly versatile and powerful 2D game engine built on JavaScript/TypeScript and PixiJS. Perfect for creating visual novels and narrative-driven games with modern web technologies.",
        image: "https://pixi-vn.web.app/visualnovel.png",
        icon: "https://pixi-vn.web.app/logo.webp",
        link: "https://pixi-vn.web.app",
        tags: ["Game Engine", "TypeScript", "PixiJS"],
    },
    {
        title: "Ink Support",
        description:
            "A VS Code extension for Ink scripting language along with seamless integration for Pixi'VN. Write your narrative scripts with full IDE support and compile them directly into your game.",
        image: "https://github.com/user-attachments/assets/cc17384a-7f2f-4e86-b99a-efbf823269d9",
        icon: "https://pixi-vn.web.app/ink.svg",
        link: "https://pixi-vn.web.app/ink",
        tags: ["VS Code", "Ink", "Integration"],
    },
    {
        title: "NQTR",
        description:
            "Navigation Quest Time Routine - An extension for Pixi'VN adding advanced systems for navigation, quests, time management, and game state handling. Fully customizable and extensible for complex game mechanics.",
        image: "https://pixi-vn.web.app/pointclick.png",
        icon: "https://pixi-vn.web.app/nqtr.png",
        link: "https://pixi-vn.web.app/nqtr",
        tags: ["Extension", "Navigation", "Quests"],
    },
    // {
    //     title: "NSFW Visual Novel",
    //     description:
    //         "An adult-oriented visual novel currently in development. Featuring rich storytelling, character development, and mature themes for a unique narrative experience.",
    //     image: "https://raw.githubusercontent.com/DRincs-Productions/ABFD/main/game/gui/main_menu_background.webp",
    //     icon: "",
    //     link: "https://www.patreon.com/nicoz_abfd",
    //     tags: ["Visual Novel", "NSFW", "In Development"],
    // },
];

function Navbar() {
    return (
        <Sheet
            component="header"
            className="motion-preset-slide-down motion-duration-700"
            sx={{
                position: "sticky",
                top: 12, // lascia uno spazio per mostrare il rounding
                zIndex: 1000,
                py: 2,
                px: { xs: 2, md: 4 },
                mx: { xs: 2, md: 6 }, // margini maggiori per evidenziare gli angoli arrotondati
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                // more opaque translucent gradient (less transparent)
                background: `linear-gradient(90deg, rgba(194,83,0,0.60) 0%, rgba(107,42,192,0.60) 100%)`,
                borderRadius: { xs: 4, md: 12 }, // arrotondamento più pronunciato
                border: "1px solid rgba(0,0,0,0.12)",
                boxShadow: (theme) => `0 10px 30px ${theme.vars.palette.primary[900]}44`,
            }}
        >
            <Box className="flex items-center gap-3">
                {/* removed icon from Navbar - title only */}
                <Typography
                    level="h4"
                    sx={{
                        fontFamily: "lilita-one",
                        color: "#000", // title in black
                        letterSpacing: "0.05em",
                    }}
                >
                    DRincs Productions
                </Typography>
            </Box>
            <Box className="flex items-center gap-2">
                <IconButton
                    component="a"
                    href="https://github.com/DRincs-Productions"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="soft"
                    color="neutral"
                    size="sm"
                >
                    <GitHubIcon />
                </IconButton>
            </Box>
        </Sheet>
    );
}

function HeroSection() {
    return (
        <Box
            component="section"
            className="motion-preset-fade motion-duration-1000"
            sx={{
                py: { xs: 8, md: 12 },
                textAlign: "center",
                background: (theme) =>
                    `linear-gradient(180deg, ${theme.vars.palette.primary[800]}22 0%, transparent 100%)`,
            }}
        >
            <Container maxWidth="md">
                {/* Responsive hero layout: column on xs (icon above title), row on md (icon left of title) */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 3,
                        flexDirection: { xs: "column", md: "row" },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Box
                        component="img"
                        src={Icon}
                        alt="DRincs Productions Logo"
                        loading="eager"
                        sx={{
                            // slightly larger on mobile
                            width: { xs: 144, md: 200 },
                            height: { xs: 144, md: 200 },
                            objectFit: "cover",
                            borderRadius: 3,
                            boxShadow: (theme) => `0 12px 36px ${theme.vars.palette.primary[900]}44`,
                            flexShrink: 0,
                        }}
                    />
                    <Box>
                        <Typography
                            level="h1"
                            className="motion-preset-slide-up motion-duration-700"
                            sx={{
                                fontFamily: "lilita-one",
                                fontSize: { xs: "2.2rem", md: "4rem" },
                                mb: 1,
                                // gradient using theme primary -> secondary
                                background: (theme) =>
                                    `linear-gradient(135deg, ${theme.vars.palette.primary[500]} 0%, ${theme.vars.palette.secondary[400]} 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            DRincs Productions
                        </Typography>
                        <Typography
                            level="body-lg"
                            className="motion-preset-slide-up motion-duration-700 motion-delay-150"
                            sx={{
                                color: (theme) => theme.vars.palette.neutral[300],
                                maxWidth: { xs: "100%", md: "600px" },
                                mx: { xs: "auto", md: 0 },
                                lineHeight: 1.8,
                            }}
                        >
                            A studio focused on narrative video games, with the ambition to elevate the development experience behind them.
                            We place no limits on creativity and have no hesitation in exploring NSFW content to tell the stories we believe in.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    className="motion-preset-slide-up motion-duration-700 motion-delay-300"
                    sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}
                >
                    <Chip variant="soft" color="primary" size="lg">
                        🎮 Game Development
                    </Chip>
                    <Chip variant="soft" color="secondary" size="lg">
                        📖 Visual Novels
                    </Chip>
                    <Chip variant="soft" color="success" size="lg">
                        🛠️ Developer Tools
                    </Chip>
                </Box>
            </Container>
        </Box>
    );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    // compute a delay class based on index (no self-reference)
    const delayClass = `motion-preset-slide-up motion-duration-700 motion-delay-${(index + 1) * 150}`;
    return (
        <Card
            className={` ${delayClass} hover:motion-preset-pulse`}
            variant="outlined"
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                // softer, theme-aware background
                backgroundColor: (theme) => `${theme.vars.palette.background.surface || 'rgba(255,255,255,0.03)'}`,
                backdropFilter: "blur(10px)",
                border: "1px solid",
                borderColor: (theme) => theme.vars.palette.divider,
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    borderColor: (theme) => theme.vars.palette.primary[400],
                },
            }}
        >
            <CardOverflow>
                <AspectRatio ratio="16/9" sx={{ minHeight: 180 }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                    />
                </AspectRatio>
                <Box
                    sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        p: 1,
                        borderRadius: "50%",
                        // use secondary tone for the icon background
                        backgroundColor: (theme) => theme.vars.palette.secondary[600],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: (theme) => `0 2px 8px ${theme.vars.palette.secondary[800]}66`,
                    }}
                >
                    <img
                        src={product.icon}
                        alt={`${product.title} icon`}
                        style={{ width: 32, height: 32 }}
                    />
                </Box>
            </CardOverflow>
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Typography
                    level="h3"
                    sx={{
                        fontFamily: "lilita-one",
                        color: (theme) => theme.vars.palette.primary[300],
                    }}
                >
                    {product.title}
                </Typography>
                <Typography
                    level="body-sm"
                    sx={{
                        color: (theme) => theme.vars.palette.neutral[300],
                        flexGrow: 1,
                        lineHeight: 1.7,
                    }}
                >
                    {product.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 1 }}>
                    {product.tags.map((tag) => (
                        <Chip
                            key={tag}
                            size="sm"
                            variant="outlined"
                            color="neutral"
                            sx={{ fontSize: "0.7rem", borderColor: (theme) => theme.vars.palette.divider }}
                        >
                            {tag}
                        </Chip>
                    ))}
                </Box>
            </CardContent>
            <CardOverflow
                variant="soft"
                sx={{
                    bgcolor: (theme) => theme.vars.palette.background.level1,
                    borderTop: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Link
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        py: 1.5,
                        color: (theme) => theme.vars.palette.primary[300],
                        fontWeight: "md",
                        transition: "all 0.2s ease",
                        "&:hover": {
                            color: (theme) => theme.vars.palette.primary[200],
                            gap: 1.5,
                        },
                    }}
                >
                    Learn More <LaunchIcon sx={{ fontSize: 16 }} />
                </Link>
            </CardOverflow>
        </Card>
    );
}

function ProductsSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 4 },
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    level="h2"
                    className="motion-preset-slide-up motion-duration-700"
                    sx={{
                        textAlign: "center",
                        fontFamily: "lilita-one",
                        mb: 2,
                        color: (theme) => theme.vars.palette.neutral[100],
                    }}
                >
                    Our Products
                </Typography>
                <Typography
                    level="body-md"
                    className="motion-preset-slide-up motion-duration-700 motion-delay-150"
                    sx={{
                        textAlign: "center",
                        color: (theme) => theme.vars.palette.neutral[400],
                        mb: 6,
                        maxWidth: "500px",
                        mx: "auto",
                    }}
                >
                    Explore our collection of tools and games designed to empower creators and
                    entertain players.
                </Typography>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            lg: "repeat(2, 1fr)",
                        },
                        gap: 4,
                    }}
                >
                    {products.map((product, index) => (
                        <ProductCard key={product.title} product={product} index={index} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

function Footer() {
    return (
        <Sheet
            component="footer"
            className="motion-preset-fade motion-duration-700"
            sx={{
                py: 4,
                px: { xs: 2, md: 4 },
                mt: 8,
                textAlign: "center",
                background: (theme) => `linear-gradient(0deg, ${theme.vars.palette.neutral[800]}AA 0%, transparent 100%)`,
                borderTop: "1px solid",
                borderColor: "divider",
            }}
        >
            <Typography level="body-sm" sx={{ color: (theme) => theme.vars.palette.neutral[400] }}>
                © {new Date().getFullYear()} DRincs Productions. All rights reserved.
            </Typography>
            <Typography level="body-xs" sx={{ color: (theme) => theme.vars.palette.neutral[500], mt: 1 }}>
                Creating tools and stories for the gaming community.
            </Typography>
        </Sheet>
    );
}

export default function About() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <HeroSection />
                <ProductsSection />
            </Box>
            <Footer />
        </Box>
    );
}
