import React from "react";
import AboutItem from "../components/AboutItem";
function About() {
    const teamData = [
        {
            id: 1,
            name: "Nguyễn Văn Nhật",
            mail: "xizot.99@gmail",
            position: "Frontend Developer",
            imgSrc:
                "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/151174682_1721959271311496_1152896193950072483_o.jpg?_nc_cat=102&ccb=3&_nc_sid=e3f864&_nc_ohc=7Bw7IEE4vpYAX8TR2Gb&_nc_ht=scontent.fsgn2-5.fna&oh=fc5eae50f1726072da94eeb97a9e76f9&oe=60594E4C",
            facebookLink: "xizott",
            githubLink: "xizot",
            instagramLink: "xizott",
        },
        {
            id: 2,
            name: "Phạm Thị Minh Hậu",
            mail: "minhaupham666@gmail",
            position: "Designer & Tester",
            imgSrc:
                "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/123800075_1641736349333789_7510025565333738858_o.jpg?_nc_cat=110&ccb=3&_nc_sid=09cbfe&_nc_ohc=SDj9tCK5oUoAX_ETfrL&_nc_ht=scontent.fsgn2-6.fna&oh=595ad0a2d805d3136ddd30873b1cbea0&oe=605AC560",
            facebookLink: "minhhau280311",
            githubLink: "mbiwron",
            instagramLink: "minhhau280311",
        },
        {
            id: 3,
            name: "Nguyễn Thế Ngọc",
            mail: "timchideyeu1998@gmail",
            position: "Leader",
            imgSrc:
                "https://avatars.githubusercontent.com/u/49614078?s=460&u=41c8d8f067c80a220ead59308ec5ec7751a08c5c&v=4",
            facebookLink: "ngocsotn",
            githubLink: "ngocsotn",
            instagramLink: "xizott",
        },
        {
            id: 4,
            name: "Vương Gia Huy",
            mail: "vghuy17ck1@gmail.com",
            position: "Backend Developer",
            imgSrc:
                "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/121305327_870963900306538_6761623131720048352_n.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=hw-058at18cAX-6E5-h&_nc_ht=scontent.fsgn2-6.fna&oh=24619b7400c3e110e2c8cf3a13bb76f6&oe=60586BA0",
            facebookLink: "kriceai",
            githubLink: "ktt45678",
            instagramLink: "/",
        },
        {
            id: 5,
            name: "Đặng Trung Hiếu",
            mail: "dangtrunghieu2304@gmail.com",
            position: "Frontend Developer & Backend Developer",
            imgSrc:
                "https://scontent.fsgn2-3.fna.fbcdn.net/v/t31.0-8/26232938_989549821207514_1561633291190164776_o.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_ohc=s3R3sgeP5uQAX_Rm1XJ&_nc_ht=scontent.fsgn2-3.fna&oh=ba454e69ed1c0570fbf65e3f4d44b033&oe=60587663",
            facebookLink: "trunghieu.dang.2304",
            githubLink: "hieu2304",
            instagramLink: "/",
        },
    ];
    document.title = `About | ${process.env.REACT_APP_WEB_NAME}`;
    return (
        <div className="p-about">
            <div className="l-container">
                <h3 className="p-about__title c-title">Meet The Team</h3>
                <div className="p-about__content">
                    {teamData.length ? (
                        teamData.map((item, index) => (
                            <div className="p-about__item" key={index}>
                                <AboutItem
                                    name={item.name}
                                    mail={item.mail}
                                    position={item.position}
                                    imgSrc={item.imgSrc}
                                    facebookLink={item.facebookLink}
                                    githubLink={item.githubLink}
                                    instagramLink={item.instagramLink}
                                />
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;
