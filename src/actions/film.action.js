import {
    GET_FAVOR,
    GET_NEWEST,
    GET_POPULAR,
    GET_EPISODE,
} from "./../types/film.type";

export const getFavor = () => (dispatch) => {
    let data = []; // get data from api
    if (data.length) {
        dispatch({
            type: GET_FAVOR,
            payload: data,
        });
    }
};

export const getPopular = () => (dispatch) => {
    let data = []; // get data from api
    data = [
        {
            x: "1",
            createdAt: "2020-12-10T10:04:34.419Z",
            name: "Elian Hills",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            cat: "Salad",
            chapter: "chapter 1",
            id: "7f1b2195-1132-4954-8140-bcc6d4b4617a",
        },
        {
            x: "2",
            createdAt: "2020-12-10T12:20:32.632Z",
            name: "London Bernier",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            cat: "Sausages",
            chapter: "chapter 2",
            id: "d967547f-9f2f-4ecd-82dd-89f4f4970d7b",
        },
        {
            x: "3",
            createdAt: "2020-12-09T20:22:37.932Z",
            name: "Casimer Howe",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            cat: "Mouse",
            chapter: "chapter 3",
            id: "b17f3114-0a65-46b8-ad7c-40917e4ea2c4",
        },
        {
            x: "4",
            createdAt: "2020-12-10T03:03:34.122Z",
            name: "Jameson Strosin",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            cat: "Tuna",
            chapter: "chapter 4",
            id: "9183804c-9e14-482d-8f48-ac5e2c5c2e30",
        },
        {
            x: "5",
            createdAt: "2020-12-09T18:36:10.300Z",
            name: "Sophie Reilly",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            cat: "Pants",
            chapter: "chapter 5",
            id: "8bf40c38-368f-48f5-ba6c-a6c510bf1fc6",
        },
        {
            x: "6",
            createdAt: "2020-12-09T22:59:24.170Z",
            name: "Orpha Bartoletti",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            cat: "Car",
            chapter: "chapter 6",
            id: "d21a91d5-1eda-446a-9bb3-d4e8dac3ec64",
        },
    ];

    if (data.length) {
        dispatch({
            type: GET_POPULAR,
            payload: data,
        });
    }
};

export const getNewest = () => (dispatch) => {
    let data = []; // get data from api
    data = [
        {
            x: "1",
            createdAt: "2020-12-10T11:47:24.547Z",
            name: "Lead Identity Officer",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            minutes: 5,
            resolution: [],
            rated: 38,
            cat: "Table",
            age: 20,
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
        },
        {
            x: "2",
            createdAt: "2020-12-10T14:42:06.819Z",
            name: "Senior Program Analyst",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            minutes: 12,
            resolution: [],
            rated: 6,
            cat: "Chips",
            age: 17,
            id: "59d9e1a7-3f31-49cc-8869-424e85382e48",
        },
        {
            x: "3",
            createdAt: "2020-12-10T02:22:26.894Z",
            name: "Customer Assurance Administrator",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            minutes: 48,
            resolution: [],
            rated: 28,
            cat: "Pizza",
            age: 47,
            id: "3c1e6c90-947f-49c3-9b60-76bb13dd47fa",
        },
        {
            x: "4",
            createdAt: "2020-12-10T14:40:55.402Z",
            name: "Senior Usability Agent",
            image:
                "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
            minutes: 5,
            resolution: [],
        },
    ];

    if (data.length) {
        dispatch({
            type: GET_NEWEST,
            payload: data,
        });
    }
};
export const getEpisode = (id) => (dispatch) => {
    let data = []; // get data from api
    data = [
        {
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
            ep: "1",
            image:
                "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175213",
            content:
                "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
        },
        {
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
            ep: "2",
            image:
                "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            content:
                "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
        },
        {
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
            ep: "3",
            image:
                "https://www.sideshow.com/storage/product-images/904974/i-am-iron-man_marvel_feature.jpg",
            content:
                "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
        },
        {
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
            ep: "4",
            image:
                "https://www.sideshow.com/storage/product-images/904974/i-am-iron-man_marvel_gallery_5ea86801a27ab.jpg",
            content:
                "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
        },
        {
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
            ep: "5",
            image:
                "https://cdn.images.express.co.uk/img/dynamic/36/590x/Iron-Man-Robert-Downey-Jr-1205037.webp?r=1573841276098",
            content:
                "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
        },
        {
            id: "88826e2d-3294-43ca-807b-d56ebb9c2014",
            ep: "6",
            image:
                "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Iron-Man-Marvel-Robert-Downey-Jr-2167713.webp?r=1573841276136",
            content:
                "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
        },
    ];

    if (data.length) {
        dispatch({
            type: GET_EPISODE,
            payload: data,
        });
    }
};
