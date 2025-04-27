import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Button } from "../../../packages/ui/components/button";

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <ThemeImage
                    className={styles.logo}
                    srcLight="/neighbornet-dark.svg"
                    srcDark="/neighbornet-light.svg"
                    alt="NeighborNet logo"
                    width={180}
                    height={38}
                    priority
                />
                <h1 className={styles.heading}>Welcome to NeighborNet</h1>
                <p className={styles.subheading}>
                    Built with ❤️ by Phong
                </p>

                <ol>
                    <li>
                        Start building your neighborhood network in{" "}
                        <code>apps/web/app/page.tsx</code>
                    </li>
                    <li>Save your changes and see them instantly.</li>
                </ol>

                <div className={styles.ctas}>
                    <a
                        className={styles.primary}
                        href="https://github.com/phnopoly/neighbor-net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className={styles.logo}
                            src="/github-mark.svg"
                            alt="GitHub Logo"
                            width={20}
                            height={20}
                        />
                        View on GitHub
                    </a>
                </div>

                <Button appName="web" className={styles.secondary}>
                    Open NeighborNet Alert
                </Button>
            </main>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} NeighborNet by Phong. All rights reserved.</p>
            </footer>
        </div>
    );
}
