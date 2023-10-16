import '../styles/globals.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Tik Tok Clone',
    description: 'Tik Tok Clone',
}

export default function RootLayout({children}: { children: React.ReactNode }) {


    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
