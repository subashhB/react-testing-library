const mockResponse = {
    data:{
        results:[
            {
                name:{
                    first: "Test",
                    last: "1",
                },
                picture: {
                    large: "testpicture1.com",
                },
                login:{
                    username: "test1",
                }
            },
            {
                name:{
                    first: "Test",
                    last: "2",
                },
                picture: {
                    large: "testpicture2.com",
                },
                login:{
                    username: "test2",
                }
            },
            {
                name:{
                    first: "Test",
                    last: "3",
                },
                picture: {
                    large: "testpicture3.com",
                },
                login:{
                    username: "test3",
                }
            },
            {
                name:{
                    first: "Test",
                    last: "4",
                },
                picture: {
                    large: "testpicture4.com",
                },
                login:{
                    username: "test4",
                }
            },
            {
                name:{
                    first: "Test",
                    last: "5",
                },
                picture: {
                    large: "testpicture5.com",
                },
                login:{
                    username: "test5",
                }
            }
        ]
    }
}

//Change resertMocks in react-scripts of node_modules to false

const mockAxios = {
    get: jest.fn().mockResolvedValue(mockResponse)
}


export default mockAxios;