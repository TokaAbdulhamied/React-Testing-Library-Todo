const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Toka",
          last: "Abdulhamied",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "tokaabdulhamied",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
