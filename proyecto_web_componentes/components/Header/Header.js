import "./Header.css";
import data from "../../data/data";

const {name, address, email, avatar, phone, aboutMe} = data;

const Header = () => `
    <header>
        <section id="title">
        <img src="${avatar}" alt="Profile Picture" id="profile-pic"></img>
        <h1>${name}</h1>
        <h3>${address}</h3>
        </section>

        <section id="info">
        <h2>Contáctame en ${email} o ${phone}</h2>
        <br>
        <p>${aboutMe}</p>
        </section>
    </header>
`;

setTimeout(() => {
    const profilePic = document.getElementById("profile-pic");
    profilePic.addEventListener("click", () => {
        profilePic.classList.add("rotate");
        setTimeout(() => profilePic.classList.remove("rotate"), 3000);
    });
}, 0);

export default Header;