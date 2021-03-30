const initalState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "BTS",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        piontBorderColor: "rgba(238,175,0,0.7)",
      },
    ],
  },
};

const bitcoinReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_BITCOIN":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_BITCOIN":
      return {
        ...state,
        loading: false,
      };
    case "SUCCES_BITCOIN":
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: "BTS",
              data: payload.data,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              piontBorderColor: "rgba(238,175,0,0.7)",
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default bitcoinReducer;
