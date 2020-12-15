import { GET_FAVOR,GET_NEWEST, GET_POPULAR } from "./../types/filmTypes";

export const getFavor = () => dispatch => {
    let data =[] // get data from api
    if(data.length){
        dispatch({
            type: GET_FAVOR,
            payload: data
        })
    }
}

export const getPopular = () => dispatch => {
    let data =[] // get data from api
    data = [
        {
          "x": "1",
          "createdAt": "2020-12-10T10:04:34.419Z",
          "name": "Elian Hills",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "cat": "Salad",
          "chapter": "chapter 1",
          "id": "7f1b2195-1132-4954-8140-bcc6d4b4617a"
        },
        {
          "x": "2",
          "createdAt": "2020-12-10T12:20:32.632Z",
          "name": "London Bernier",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "cat": "Sausages",
          "chapter": "chapter 2",
          "id": "d967547f-9f2f-4ecd-82dd-89f4f4970d7b"
        },
        {
          "x": "3",
          "createdAt": "2020-12-09T20:22:37.932Z",
          "name": "Casimer Howe",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "cat": "Mouse",
          "chapter": "chapter 3",
          "id": "b17f3114-0a65-46b8-ad7c-40917e4ea2c4"
        },
        {
          "x": "4",
          "createdAt": "2020-12-10T03:03:34.122Z",
          "name": "Jameson Strosin",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "cat": "Tuna",
          "chapter": "chapter 4",
          "id": "9183804c-9e14-482d-8f48-ac5e2c5c2e30"
        },
        {
          "x": "5",
          "createdAt": "2020-12-09T18:36:10.300Z",
          "name": "Sophie Reilly",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "cat": "Pants",
          "chapter": "chapter 5",
          "id": "8bf40c38-368f-48f5-ba6c-a6c510bf1fc6"
        },
        {
          "x": "6",
          "createdAt": "2020-12-09T22:59:24.170Z",
          "name": "Orpha Bartoletti",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "cat": "Car",
          "chapter": "chapter 6",
          "id": "d21a91d5-1eda-446a-9bb3-d4e8dac3ec64"
        },
    ]

    if(data.length){
        dispatch({
            type: GET_POPULAR,
            payload: data
        })
    }
}

export const getNewest = () => dispatch => {
    let data = [] // get data from api
    data = [
        {
          "x": "1",
          "createdAt": "2020-12-10T11:47:24.547Z",
          "name": "Lead Identity Officer",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "minutes": 5,
          "resolution": [
            
          ],
          "rated": 38,
          "cat": "Table",
          "age": 20,
          "id": "88826e2d-3294-43ca-807b-d56ebb9c2014"
        },
        {
          "x": "2",
          "createdAt": "2020-12-10T14:42:06.819Z",
          "name": "Senior Program Analyst",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "minutes": 12,
          "resolution": [
            
          ],
          "rated": 6,
          "cat": "Chips",
          "age": 17,
          "id": "59d9e1a7-3f31-49cc-8869-424e85382e48"
        },
        {
          "x": "3",
          "createdAt": "2020-12-10T02:22:26.894Z",
          "name": "Customer Assurance Administrator",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "minutes": 48,
          "resolution": [
            
          ],
          "rated": 28,
          "cat": "Pizza",
          "age": 47,
          "id": "3c1e6c90-947f-49c3-9b60-76bb13dd47fa"
        },
        {
          "x": "4",
          "createdAt": "2020-12-10T14:40:55.402Z",
          "name": "Senior Usability Agent",
          "image": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/11/the-rock.jpg",
          "minutes": 5,
          "resolution": [
            
          ],
        }
    ]

    if(data.length){
        dispatch({
            type: GET_NEWEST,
            payload: data
        })
    }
}