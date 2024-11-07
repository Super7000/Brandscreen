import "./globals.css";

export const metadata = {
    title: "Brandscreen",
    description: "Your ultimate branding solution",
    openGraph: {
        title: "Brandscreen",
        description: "Your ultimate branding solution",
        url: "https://brandscreen.vercel.app",
        type: "website",
        images: [
            {
                url: "https://brandscreen.vercel.app/images/logo/2.png",
                width: 800,
                height: 600,
                alt: "Brandscreen",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@Subrata70000",
        title: "Brandscreen",
        description: "Your ultimate branding solution",
        image: "https://brandscreen.vercel.app/images/logo/2.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
