import Link from "next/link";
const Menu = () => {
    return (
        <div>
            <div><Link href="/home">Homepage</Link></div>
            <div><Link href="/red">red</Link></div>
            <div><Link href="/Blue">Blue</Link></div>
        </div>

    );
};
export default Menu;
